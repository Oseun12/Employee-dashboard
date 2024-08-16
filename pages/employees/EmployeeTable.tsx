import Link from "next/link";
import Image from "next/image";

type Employee = {
  role: string;
  _id: string;
  name: string;
  email: string;
  jobTitle?: string;
  isOnline: boolean;
  avatarUrl?: string;
};

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-24 sm:py-32">
      {/* Heading and Description */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet our Employees
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our team is a group of passionate professionals committed to delivering excellence in every project. Each member brings unique skills and experiences, contributing to a collaborative environment where innovation thrives. We value integrity, teamwork, and the pursuit of continuous improvement.
        </p>
      </div>

      {/* Employee List */}
      <ul role="list" className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12">
        {employees.map((employee) => (
          <li key={employee._id} className="flex items-center gap-x-6">
            <Link href={`/employees/${employee._id}`} className="flex items-center gap-x-4 group">
              <div className="avatar online">
                <div className="relative h-16 w-16 group-hover:opacity-75 transition-opacity duration-200">
                  <Image
                    src={
                      employee.avatarUrl ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt={employee.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                  {employee.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {employee.role}
                </p>
              </div>
            </Link>
            {/* <Link href={`/employees/${employee._id}`} className="btn btn-sm btn-secondary ml-auto">
              View
            </Link> */}
          </li>
        ))}
      </ul>

      {/* Centered Button */}
      <div className="flex justify-center mt-10">
        <Link href="/employees/new" className="btn btn-secondary font-bold">
          ADD NEW EMPLOYEE
        </Link>
      </div>
    </div>
  );
};

export default EmployeeTable;
