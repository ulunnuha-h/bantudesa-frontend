import React, { useEffect, useState } from "react";
import image from '../Assets/image5.jpg'
import {useNavigate} from 'react-router-dom';
import wm from '../Assets/logo_watermark.svg';

const imgStyle = {
    backgroundImage:`url(${image})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    minHeight:'100vh'
}

const wmStyle = {
    backgroundImage:`url(${wm})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
}

export const RegisterVillage = () => {
    const nav = useNavigate();
    const [file,setFile] = useState();
    const [preview,setPreview] = useState();

    useEffect(()=>{
        if(typeof file !== "undefined") setPreview(URL.createObjectURL(file));
        console.log(file);
    },[file])

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <main className="row m-0" style={{minHeight:'100vh',backgroundColor:'var(--color-5)'}}>
            <div className="sticky-top h-100 d-none d-lg-block col-6" style={imgStyle}/>
            <div 
                className="d-flex justify-content-center align-items-center flex-column col-12 col-lg-6"
                style={wmStyle}>
                <h1 className="mb-3 mt-5" style={{fontWeight:'bold'}}>Daftar</h1>
                <span>Sebagai Desa</span>
                <form className="d-flex flex-column w-75 my-5" onSubmit={handleSubmit}>
                    <label className="input-label" htmlFor="nama">Nama Desa</label>
                    <input className="input-field" type="text" id="nama" name="nama" required/>
                    <label className="input-label" htmlFor="email">Email</label>
                    <input className="input-field" type="email" id="email" name="email" required/>
                    <label className="input-label" htmlFor="telepon">Nomor Telepon</label>
                    <input className="input-field" type="text" id="telepon" name="telepon" required/>
                    <label className="input-label" htmlFor="univ">Deskripsi Singkat</label>
                    <textarea className="input-field" id="univ" name="univ" required/>
                    <label className="input-label">Foto</label>
                    <div className="input-field row p-0 m-0" style={{minHeight:'80px'}}>
                        <section className="col-12 col-lg-8">
                            <input type="file" id="cv" name="cv" required className="input-file m-1" onChange={e=>setFile(e.target.files[0])}/>
                            <section style={{height:'200px',backgroundImage:`url(${preview})`,backgroundSize:'cover'}}/>
                        </section>
                        <span className="col-12 col-lg-4 align-self-end d-flex justify-content-end p-0">
                            <label className="px-4 py-1 m-2 primary-btn" htmlFor="cv">Unggah</label>
                        </span>
                    </div>
                    <label className="input-label" htmlFor="pass">Password</label>
                    <input className="input-field" type="password" id="pass" name="pass" required/>
                    <label className="input-label" htmlFor="konfirm">Konfirmasi Password</label>
                    <input className="input-field" type="password" id="konfirm" name="konfirm" required/>
                    
                    <button type="submit" className="secondary-btn px-5 py-2 align-self-end">Daftar</button>
                </form>
            </div>
        </main>
    );
}