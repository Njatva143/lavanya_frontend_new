// src/Pages/TaxInvoices.jsx
import React from 'react';

const taxInvoices = [
  {
    id: 101,
    invoiceNo: 'INV-001',
    client: 'ABC Pvt Ltd',
    date: '2025-03-31',
    amount: '₹45,000',
    pdf: '/invoice-sample.pdf', // Placeholder path
  },
  {
    id: 102,
    invoiceNo: 'INV-002',
    client: 'XYZ Corp',
    date: '2025-03-30',
    amount: '₹60,000',
    pdf: '/invoice-sample.pdf',
  },
];

const TaxInvoices = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tax Invoices</h1>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Invoice No</th>
              <th className="text-left px-4 py-2">Client</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Amount</th>
              <th className="text-left px-4 py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {taxInvoices.map((invoice) => (
              <tr key={invoice.id} className="border-t">
                <td className="px-4 py-2">{invoice.invoiceNo}</td>
                <td className="px-4 py-2">{invoice.client}</td>
                <td className="px-4 py-2">{invoice.date}</td>
                <td className="px-4 py-2">{invoice.amount}</td>
                <td className="px-4 py-2">
                  <a
                    href={invoice.pdf}
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

export default TaxInvoices;
