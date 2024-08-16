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

interface EmployeeHeroProps {
  employees: Employee[];
}

const EmployeeHero: React.FC<EmployeeHeroProps> = ({ employees }) => {
  return (
    <div className="flex justify-center items-center w-full">
      {/* Page content here */}
      <div className="relative w-full max-w-screen-lg h-[70vh] mb-20">
        {/* Background Image */}
        <img
          alt="workspace"
          src="/images/mh_prd_workspaces.jpg.rendition.480.360.jpg"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Centered Text and Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl font-bold mb-10">Welcome to the TEAM!</h1>
          <Link href="/employees/new" className="btn btn-secondary mt-4">
            Add New Employee
          </Link>
          <Link href="/employees/EmployeeList" className="btn mt-4">
            View Employees
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHero;
