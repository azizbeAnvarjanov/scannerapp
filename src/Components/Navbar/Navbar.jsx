import React, { useState } from 'react'
import '../Css/Navbar.css'

import { BsPlusCircleFill } from 'react-icons/bs'
import { LuFileScan } from 'react-icons/lu'
import { HiOutlineQrcode } from 'react-icons/hi'
import { GoChecklist } from 'react-icons/go'

import { Link } from 'react-router-dom'



function Navbar() {


    const [isActive, setIsActive] = useState(false);


    function isactive(e) {

        const current_tab = e.target.closest('.tab');
        
        document.querySelectorAll('.tab').forEach((el) => el.classList.remove('active'));
        current_tab.classList.add('active');


    }


  return (
    <>
        <nav onClick={(e) => isactive(e)}>
            <div className="tab active">
                <Link to="/">
                    <LuFileScan />
                </Link>
                <p>Skanerlash</p>
            </div>
            <div className="tab">
                <Link to="/qrcode">
                    <HiOutlineQrcode />
                </Link>
                <p>QR yaratish</p>
            </div>
            <div className="tab">
                <Link to="/adddiller">
                    <BsPlusCircleFill />
                </Link>
                <p>Diller qo'shish</p>
            </div>
            <div className="tab">
                <Link to="/lists">
                    <GoChecklist />
                </Link>
                <p>Ro'yhat</p>
            </div>
        </nav>
    </>
  )
}

export default Navbar