import { useEffect, useState } from "react";
import EmployeeTable from "../employees/EmployeeTable";
import Link from "next/link";

type Employee = {
  role: string;
  _id: string;
  name: string;
  email: string;
  jobTitle?: string;
  isOnline: boolean;
  avatarUrl?: string;
};

const EmployeeTablePage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      if (data.success) {
        setEmployees(data.employees);
      } else {
        console.error("Failed to load employees:", data);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* <h1 className="text-3xl font-bold text-center mb-4">Employee List</h1> */}
      <div className="text-center">

      </div>
      <EmployeeTable employees={employees} />

      
    </div>
    
  );
};

export default EmployeeTablePage;
