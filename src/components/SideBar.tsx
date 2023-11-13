import { Dispatch, SetStateAction } from 'react';
import '../styles/SideBar.style.css'
import { 
    FaTimes, 
    FaHome, 
    FaEnvelope, 
    FaRegSun, 
    FaUserAlt, 
    FaIdCardAlt, 
    FaRegFileAlt,
    FaRegCalendarAlt,
    FaChartBar
  } from 'react-icons/fa'

interface SideBarProps {
  active: Dispatch<SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ active }) => {
  // Your SideBar component logic here
const carrinho = ({active }: { active: Dispatch<SetStateAction<boolean>> }) => {
    const closeSidebar = () => {
        active(false)
    }
}
  
  return (
   <><aside carrinho={active}>
        <FaTimes onClick={closeSidebar} /> 
    </aside></>
  );
};

export default SideBar;
