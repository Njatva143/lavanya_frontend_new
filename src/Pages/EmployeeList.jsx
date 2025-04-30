// src/Pages/EmployeeList.jsx
import React from 'react';

const employees = [
  { id: 1, name: 'Ravi Kumar', position: 'Security Guard', location: 'Delhi' },
  { id: 2, name: 'Amit Singh', position: 'Supervisor', location: 'Noida' },
  { id: 3, name: 'Sunil Sharma', position: 'Field Officer', location: 'Gurgaon' },
];

const EmployeeList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">ID</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Position</th>
              <th className="text-left px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} className="border-t">
                <td className="px-4 py-2">{emp.id}</td>
                <td className="px-4 py-2">{emp.name}</td>
                <td className="px-4 py-2">{emp.position}</td>
                <td className="px-4 py-2">{emp.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
