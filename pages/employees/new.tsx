import { useState } from 'react';
import { useRouter } from 'next/router';

const NewEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, role }),
    });
    const data = await response.json();
    console.log('New Employee:', data);
    router.push('/employees/EmployeeList');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Employee</h1>
        <form onSubmit={handleSubmit}>
          <label className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="bg-white border border-black text-black p-2 rounded grow"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="bg-white border border-black text-black p-2 rounded grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <select
              className="bg-white border border-black text-black p-2 rounded grow"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>Select Role</option>
              <option value="HR">HR</option>
              <option value="Senior Frontend Developer">Senior Frontend Developer</option>
              <option value="Junior Frontend Developer">Junior Frontend Developer</option>
              <option value="Senior Backend Developer">Senior Backend Developer</option>
              <option value="Junior Backend Developer">Junior Backend Developer</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
              <option value="Quality Assurance Tester">Quality Assurance Tester</option>
              {/* Add more roles as needed */}
            </select>
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewEmployee;
