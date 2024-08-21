import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db('employeeDB');

    switch (req.method) {
      case 'GET':
        const employees = await db.collection('employees').find({}).toArray();
        res.json({ success: true, employees });
        break;
      case 'POST':
        const newEmployee = req.body;
        await db.collection('employees').insertOne(newEmployee);
        res.json({ success: true, employee: newEmployee });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
