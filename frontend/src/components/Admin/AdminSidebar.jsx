import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaTachometerAlt,
  FaCog,
  FaBox,
  FaShoppingCart,
  FaStore,
  FaSignOutAlt,
} from 'react-icons/fa';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can also clear localStorage/sessionStorage here
    console.log("Logging out...");
    navigate('/'); // Navigate to home
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Users', path: '/admin/users', icon: <FaUser /> },
    { name: 'Products', path: '/admin/products', icon: <FaBox /> },
    { name: 'Orders', path: '/admin/orders', icon: <FaShoppingCart /> },
    { name: 'Shop', path: '/admin/shop', icon: <FaStore /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCog /> },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen w-64 flex flex-col justify-between">
      <div>
        <div className="mb-6">
          <NavLink to="/admin" className="text-2xl font-bold text-white">
            Rabbit
          </NavLink>
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2'
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ✅ Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded flex items-center space-x-2"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default AdminSidebar;
