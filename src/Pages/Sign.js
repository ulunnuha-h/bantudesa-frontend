import React from "react";
import image from '../Assets/image3.jpg'
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

export const Sign = () => {
    const nav = useNavigate();

    return(
        <main className="row row-cols-lg-2 m-0" style={{minHeight:'100vh',backgroundColor:'var(--color-5)'}}>
            <div className="h-100" style={imgStyle}/>
            <div 
                className="d-flex justify-content-center align-items-center flex-column"
                style={wmStyle}>
                <h1 className="mb-5" style={{fontWeight:'bold'}}>Sudah Punya Akun ?</h1>
                <h5>Daftar Sebagai</h5>
                <section>
                    <button className="secondary-btn px-5 py-2 mx-2" onClick={()=>nav('/register-village')}>Pemilik Desa</button>
                    <button className="secondary-btn px-5 py-2 mx-2" onClick={()=>nav('/register-student')}>Mahasiswa</button>
                </section>
                <h6 className="my-4">Atau</h6>
                <button className="primary-btn px-5 py-2" onClick={()=>nav('/signin')}>Masuk</button>
            </div>
        </main>
    );
}