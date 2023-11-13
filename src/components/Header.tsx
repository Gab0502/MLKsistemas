import {useState} from 'react'
import '../styles/Header.style.css'
import { Outlet } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import SideBar from './SideBar'

function Header() {

    const [sideBar,setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sideBar)


  return (
    <>
      <nav>
        <ul>
            <li>
                <h1>
                    MKS
                </h1>
                <h4>
                    Sistemas
                </h4>
            </li>
            <li className='sideBar'>
                
                <AiOutlineShoppingCart onClick={showSideBar}/>
                {sideBar && <SideBar active={setSideBar}/>}
                
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Header