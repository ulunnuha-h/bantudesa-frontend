import React, { useState } from "react";
import logo from '../../Assets/logo.svg'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Project } from "./Project";
import './style.css';

export const Admin = () => {
    const nav = useNavigate();
    const [menu,setMenu] = useState(0);

    const menuStyle = (id) => {
        if(id === menu) return "active";
    }

    const changeMenu = (id) => {
        setMenu(id);
        switch (id) {
            case 0:
                nav('');
                break;
            case 1:
                nav('proyek');
                break;
            case 2:
                nav('proposal');
                break;
            case 3:
                nav('pengaturan');
                break;
        }
    };

    return(
        <main className="row m-0">
            <nav className="col-2 d-flex align-items-center flex-column" style={{backgroundColor:'var(--color-4)',height:'100vh'}}>
                <img src={logo} style={{width:'130px'}} className="mb-4 mt-5"/>
                <Link className="px-3 py-2 text-center mb-3 back-btn"  to="/">Kembali ke Website</Link>
                <ul className="admin-menu">
                    <li>
                        <button className={menuStyle(0)} onClick={()=>changeMenu(0)}>Home</button>
                    </li>
                    <li>
                        <button className={menuStyle(1)} onClick={()=>changeMenu(1)}>Proyek</button>
                    </li>
                    <li>
                        <button className={menuStyle(2)} onClick={()=>changeMenu(2)}>Proposal</button>
                    </li>
                    <li>
                        <button className={menuStyle(3)} onClick={()=>changeMenu(3)}>Pengaturan</button>
                    </li>
                </ul>
                <div className="h-100 w-100 mb-3 d-flex justify-content-center align-items-end">
                    <button className="primary-btn px-5 py-2">Keluar</button>
                </div>
            </nav>
            <div className="col-10 p-0">
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="proyek" element={<Project/>}/>
                    <Route path="proposal" element={<h1>proposal</h1>}/>
                    <Route path="pengaturan" element={<h1>pengaturan</h1>}/>
                </Routes>
            </div>
        </main>
    )
}