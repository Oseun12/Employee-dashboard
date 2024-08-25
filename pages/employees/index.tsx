import { useEffect, useState } from "react";
import EmployeeStat from "./EmployeeStat";
import EmployeeTable from "./EmployeeTable";
import EmployeeHero from "./EmployeeHero";
import EmployeeCarousal from "./EmployeeCarousal";
import EmployeeProfile from "./EmployeeProfile";

type Employee = {
  role: string;
  _id: string;
  name: string;
  email: string;
  jobTitle?: string;
  isOnline: boolean;
  avatarUrl?: string;
};

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [theme, setTheme] = useState("light");

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

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "synthwave" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="drawer lg:drawer-open">
        {/* Navbar */}
        <nav className="bg-base-100 w-full fixed top-0 z-10 lg:w-4/5">
          <div className="container mx-auto px-4 flex justify-between items-center h-16">
            {/* Left-aligned items */}
            <div className="flex items-center space-x-4">
              {/* Dropdown Menu */}
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Homepage</a></li>
                    <li><a>About</a></li>
                    <li><a>Join our Meeting</a></li>
                    <li><a>Logout</a></li>
                  </ul>
                </div>
              </div>

              {/* Search Button */}
              <button className="btn border-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Theme Toggle */}
              <input
                type="checkbox"
                className="toggle theme-controller"
                onChange={handleThemeToggle}
                checked={theme === "synthwave"}
              />
            </div>

            {/* Center-aligned Title */}
            <div className="navbar-center">
              <a className="btn btn-ghost text-xl">Chels-Office</a>
            </div>
          </div>
        </nav>

        <div className="mt-16"> {/* Add margin to avoid overlap with fixed navbar */}
          <EmployeeHero employees={employees} />
          <EmployeeProfile employees={employees} />
          <EmployeeCarousal employees={employees} />
          <EmployeeStat employees={employees} />
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer bg-neutral text-neutral-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-10 w-full lg:w-4/5">
      <nav className="w-full">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="w-full">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="w-full">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav className="w-full">
        <h6 className="footer-title">Explore</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </nav>
      <nav className="w-full">
        <h6 className="footer-title">Apps</h6>
        <a className="link link-hover">Mac</a>
        <a className="link link-hover">Windows</a>
        <a className="link link-hover">iPhone</a>
        <a className="link link-hover">Android</a>
      </nav>
      <nav className="w-full">
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.231 0-3.611.246-4.388 1.885-4.384 8.816-.004 6.851.757 8.583 4.384 8.82 3.604.246 11.631.246 15.231 0 3.609-.247 4.388-1.884 4.384-8.816.004-6.852-.756-8.584-4.384-8.82zm-11.494 11.601v-7.55l6.616 3.775-6.616 3.775z"></path>
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6h6v-2h-4z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>

    </div>
  );
};

export default EmployeeList;
