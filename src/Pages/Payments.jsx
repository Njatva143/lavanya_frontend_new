// src/Pages/Payments.jsx
import React from 'react';

const payments = [
  {
    id: 1,
    employee: 'Rajesh Kumar',
    amount: '₹18,000',
    date: '2025-04-01',
    method: 'Bank Transfer',
    status: 'Paid',
  },
  {
    id: 2,
    employee: 'Suman Singh',
    amount: '₹17,500',
    date: '2025-04-01',
    method: 'UPI',
    status: 'Paid',
  },
];

const Payments = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Employee</th>
              <th className="text-left px-4 py-2">Amount</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Method</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t">
                <td className="px-4 py-2">{payment.employee}</td>
                <td className="px-4 py-2">{payment.amount}</td>
                <td className="px-4 py-2">{payment.date}</td>
                <td className="px-4 py-2">{payment.method}</td>
                <td className="px-4 py-2">
                  <span className="text-green-600 font-semibold">{payment.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
