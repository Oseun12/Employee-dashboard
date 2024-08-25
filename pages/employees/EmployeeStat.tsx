type Employee = {
  role: string;
  _id: string;
  name: string;
  email: string;
  jobTitle?: string;
  isOnline: boolean;
  avatarUrl?: string;
};

interface EmployeeStatProps {
  employees: Employee[];
}

const EmployeeStat: React.FC<EmployeeStatProps> = ({ employees }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 mb-4 md:-mb-48 md:-mt-48">
      {/* Header and Paragraph */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Employee Statistics</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:w-4/5">
          Here is an overview of key statistics related to our employees. These metrics provide insights into our engagement and productivity.
        </p>
      </div>
      
      {/* Stats Section */}
      <div className="stats shadow-2xl max-w-4xl mx-auto lg:w-4/5">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-2xl">Total Likes</div>
          <div className="stat-value text-primary text-5xl">15.2K</div>
          <div className="stat-desc text-sm">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-2xl">Page Views</div>
          <div className="stat-value text-secondary text-5xl">800k</div>
          <div className="stat-desc text-sm">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="w-16 rounded-full"></div>
          </div>
          <div className="stat-value text-5xl">86%</div>
          <div className="stat-title text-2xl">Tasks done</div>
          <div className="stat-desc text-sm text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};


export default EmployeeStat;
