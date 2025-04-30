// src/Pages/SalarySlips.jsx
import React from 'react';

const salarySlips = [
  {
    id: 1,
    employee: 'Ravi Kumar',
    month: 'March 2025',
    amount: '₹18,000',
    pdf: '/sample-slip.pdf', // placeholder path
  },
  {
    id: 2,
    employee: 'Amit Singh',
    month: 'March 2025',
    amount: '₹22,500',
    pdf: '/sample-slip.pdf',
  },
];

const SalarySlips = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Salary Slips</h1>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Employee</th>
              <th className="text-left px-4 py-2">Month</th>
              <th className="text-left px-4 py-2">Amount</th>
              <th className="text-left px-4 py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {salarySlips.map((slip) => (
              <tr key={slip.id} className="border-t">
                <td className="px-4 py-2">{slip.employee}</td>
                <td className="px-4 py-2">{slip.month}</td>
                <td className="px-4 py-2">{slip.amount}</td>
                <td className="px-4 py-2">
                  <a
                    href={slip.pdf}
                    download
                    className="text-blue-600 hover:underline"
                  >
                    Download PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalarySlips;
