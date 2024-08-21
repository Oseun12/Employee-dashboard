import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Employee = {
  name: string;
  email: string;
  role: string;
};

const EmployeeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/employees/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Employee not found');
          }
          return res.json();
        })
        .then((data) => {
          setEmployee(data.employee);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setError('Employee not found');
          router.push('/employees');
        });
    }
  }, [id, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleUpdate = async () => {
    if (employee) {
      try {
        const response = await fetch(`/api/employees/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employee),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error updating employee:', errorData);
        } else {
          router.push('/employees/EmployeeList');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  const handleDelete = async () => {
    await fetch(`/api/employees/${id}`, {
      method: 'DELETE',
    });
    router.push('/employees/EmployeeList');
  };

  return employee ? (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-12 w-full max-w-lg rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">Employee Details</h1>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Name:</label>
          <input
            type="text"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            className="input input-bordered border border-gray-300 p-3 rounded w-full text-white"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Email:</label>
          <input
            type="email"
            value={employee.email}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            className="input input-bordered border border-gray-300 p-3 rounded w-full text-white"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-700">Role:</label>
          <input
            type="text"
            value={employee.role}
            onChange={(e) => setEmployee({ ...employee, role: e.target.value })}
            className="input input-bordered border text-white border-gray-300 p-3 rounded w-full"
          />
        </div>
        <div className="flex gap-4">
          <button onClick={handleDelete} className="btn btn-error px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded">
            Delete Employee
          </button>
          <button onClick={handleUpdate} className="btn btn-primary px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded">
            Update Employee
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p>Employee not found</p>
  );
};

export default EmployeeDetail;
