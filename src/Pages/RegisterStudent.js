import React from "react";
import image from '../Assets/image4.jpg'
import {useNavigate} from 'react-router-dom';
import wm from '../Assets/logo_watermark.svg';

const imgStyle = {
    backgroundImage:`url(${image})`,
    backgroundSize:'cover',
    backgroundPosition:'top',
    minHeight:'100vh'
}

const wmStyle = {
    backgroundImage:`url(${wm})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
}

const ketStyle = {
    fontSize:'10px'
}

export const RegisterStudent = () => {
    const nav = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <main className="row m-0" style={{minHeight:'100vh',backgroundColor:'var(--color-5)'}}>
            <div className="sticky-top h-100 col-6 d-none d-lg-block" style={imgStyle}/>
            <div 
                className="d-flex justify-content-center align-items-center flex-column col-12 col-lg-6"
                style={wmStyle}>
                <h1 className="mb-3 mt-5" style={{fontWeight:'bold'}}>Daftar</h1>
                <span>Sebagai Mahasiswa</span>
                <form className="d-flex flex-column w-75 my-5" onSubmit={handleSubmit}>
                    <label className="input-label" htmlFor="nama">Nama Mahasiswa</label>
                    <input className="input-field" type="text" id="nama" name="nama" required/>
                    <label className="input-label" htmlFor="email">Email</label>
                    <input className="input-field" type="email" id="email" name="email" required/>
                    <label className="input-label" htmlFor="telepon">Nomor Telepon</label>
                    <input className="input-field" type="text" id="telepon" name="telepon" required/>
                    <label className="input-label" htmlFor="univ">Universitas</label>
                    <input className="input-field" type="text" id="univ" name="univ" required/>
                    <label className="input-label" htmlFor="fac">Fakultas</label>
                    <input className="input-field" type="text" id="fac" name="fac" required/>
                    <label className="input-label" htmlFor="tim">Anggota Tim
                        <span className="mx-1" style={ketStyle}>pisahkan dengan koma(,)</span>
                    </label>
                    <input className="input-field" type="text" id="tim" name="tim" required/>
                    <label className="input-label" htmlFor="dosen">Dosen Pembimbing</label>
                    <input className="input-field" type="text" id="dosen" name="dosen" required/>
                    <label className="input-label">Curriculum Vitae (CV)</label>
                    <section className="input-field d-flex justify-content-between" style={{height:'80px'}}>
                        <input type="file" id="cv" name="cv" required className="input-file m-1"/>
                        <label className="primary-btn px-4 py-1 align-self-end m-1" htmlFor="cv">Unggah</label>
                    </section>
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