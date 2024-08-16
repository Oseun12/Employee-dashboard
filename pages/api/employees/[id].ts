import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('employeeDB');
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const employee = await db.collection('employees').findOne({ _id: new ObjectId(id as string) });
      if (!employee) {
        return res.status(404).json({ success: false, message: "Employee not found" });
      }
      res.json({ success: true, employee });
      break;
    case 'PUT':
      const updatedEmployee = req.body;
      await db.collection('employees').updateOne({ _id: new ObjectId(id as string) }, { $set: updatedEmployee });
      res.json({ success: true });
      break;
    case 'DELETE':
      await db.collection('employees').deleteOne({ _id: new ObjectId(id as string) });
      res.json({ success: true });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
