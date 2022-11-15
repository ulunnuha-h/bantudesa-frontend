import React, { useState } from "react";
import './style.css';
import logo from "../Assets/logo.svg"
import searchIcon from "../Assets/icons/search.svg";
import userProfile from "../Assets/icons/user-profile.svg";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
    const navigate = useNavigate();
    const [active,setActive] = useState(0);
    const [menu,setMenu] = useState(false);
    const nav = (to,idx) => {
        setActive(idx)
        navigate(to);
    } 

    const linkClass = (idx) => {
        if(idx === active) return "nav-link active";
        else return "nav-link";
    }

    return(
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="container-fluid">
            <a className="navbar-brand mx-0 mx-lg-5" href="/">
                <img src={logo} alt="" width="80"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex search-input w-100 mt-3 mt-lg-0" role="search">
                    <input className="py-2 px-3 w-100" type="search" placeholder="Cari Proyek"/>
                    <button className="p-2" type="submit">
                        <img src={searchIcon}/>
                    </button>
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-lg-center align-items-start">
                    <li className="nav-item">
                        <a className={"ms-lg-3 ms-1 me-1 " + linkClass(0)} href="#" onClick={()=>nav("/",0)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={"mx-1 " + linkClass(1)} href="#proyek" onClick={()=>nav("",1)}>Proyek</a>
                    </li>
                    <li className="nav-item">
                        <a className= {"mx-1 " + linkClass(2)} href="#testimoni" onClick={()=>nav("",2)}>Testimoni</a>
                    </li>
                    <li className="nav-item">
                        {localStorage.getItem('role') !== null ?
                        <button className="secondary-btn mx-2 px-4 py-2" onClick={()=>{navigate('sign')}}>Daftar</button>:
                        <button className="primary-btn mx-2 px-4 py-2" onClick={()=>{navigate('admin-bantudesa')}}>Admin</button>
                        }
                    </li>
                    <li className="nav-item">
                        {localStorage.getItem('role') !== null ?
                        <button className="primary-btn ms-2 me-5 px-4 py-2" onClick={()=>{navigate('signin')}}>Masuk</button>:
                        <span className="bg-dark" onMouseEnter={()=>setMenu(true)} onMouseLeave={()=>setMenu(false)}>
                            <button className="profile-btn ms-2 me-5 px-4 py-2 d-flex" >
                                Profil <img className="ms-1" src={userProfile} height="21"/>
                            </button>
                            {menu ? 
                            <ul className="position-absolute p-0 mx-2" style={{listStyle:'none'}}>
                                <li style={{width:'122px'}}>
                                    <button className="profile-btn w-100">Pengaturan</button>
                                </li>
                                <li style={{width:'122px'}}>
                                    <button className="profile-btn w-100">Keluar</button>
                                </li>
                            </ul>:
                            null
                            }
                        </span>
                        }
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}