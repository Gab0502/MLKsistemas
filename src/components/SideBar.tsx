import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../styles/SideBar.style.css'

interface SideBarProps {
  active: Dispatch<SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <aside className="sidebar">
      <FaTimes onClick={closeSidebar} />
      {/* Add other sidebar content here */}
    </aside>
  );
};

export default SideBar;
