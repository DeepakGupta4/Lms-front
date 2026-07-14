import React, { useState } from 'react';
import { FaBars, FaBell, FaExpand } from 'react-icons/fa';
import Sidebar from './AdminSidebar';

const AdminHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <header className="admin-header">
        <div className="left-section">
          <span className="logo">
            <span className="logo-icon">🔴</span>
            <strong>ADMIN</strong>
          </span>
          <button className="menu-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>

        <div className="right-section">
          <FaExpand className="icon expand-icon" />
          <div className="notification-icon">
            <FaBell />
            <span className="badge">1</span>
          </div>
          <div className="profile">
            <div className="profile-ring">
              <img
                src="https://i.ibb.co/0j1Y95R/avatar-icon.png"
                alt="Admin Avatar"
              />
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default AdminHeader;
