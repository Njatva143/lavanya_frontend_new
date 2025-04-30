import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Lavanya Security</h2>
        <nav className="mt-6 space-y-2">
          <Link to="/dashboard" className="block py-2 hover:bg-gray-700 px-3 rounded">Dashboard</Link>
          <Link to="/employees" className="block py-2 hover:bg-gray-700 px-3 rounded">Employees</Link>
          <Link to="/salary-slips" className="block py-2 hover:bg-gray-700 px-3 rounded">Salary Slips</Link>
          <Link to="/invoices" className="block py-2 hover:bg-gray-700 px-3 rounded">Invoices</Link>
          <Link to="/payments" className="block py-2 hover:bg-gray-700 px-3 rounded">Payments</Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
