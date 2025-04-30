// src/Pages/PfEsic.jsx
import React from 'react';

const records = [
  {
    id: 1,
    employee: 'Rajesh Kumar',
    pf: '₹1,800',
    esic: '₹500',
    month: 'March 2025',
    status: 'Deposited',
  },
  {
    id: 2,
    employee: 'Suman Singh',
    pf: '₹1,750',
    esic: '₹480',
    month: 'March 2025',
    status: 'Deposited',
  },
];

const PfEsic = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">PF / ESIC Contributions</h1>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Employee</th>
              <th className="text-left px-4 py-2">PF</th>
              <th className="text-left px-4 py-2">ESIC</th>
              <th className="text-left px-4 py-2">Month</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.employee}</td>
                <td className="px-4 py-2">{item.pf}</td>
                <td className="px-4 py-2">{item.esic}</td>
                <td className="px-4 py-2">{item.month}</td>
                <td className="px-4 py-2">
                  <span className="text-green-600 font-semibold">{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PfEsic;
