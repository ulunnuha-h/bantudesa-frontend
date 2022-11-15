import React from "react";
import image from '../Assets/image3.jpg'
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

export const SignIn = () => {
    return(
        <main className="row row-cols-lg-2 m-0" style={{minHeight:'100vh',backgroundColor:'var(--color-5)'}}>
            <div className="h-100" style={imgStyle}/>
            <div 
                className="d-flex justify-content-center align-items-center flex-column"
                style={wmStyle}>
                <h1 className="mb-5" style={{fontWeight:'bold'}}>Masuk</h1>
                <form className="d-flex flex-column w-75">
                    <label className="input-label" htmlFor="email">Email</label>
                    <input className="input-field mb-4" type="email" name="email" required/>
                    <label className="input-label" htmlFor="pass">Password</label>
                    <input className="input-field" type="password" name="pass" required/>
                    <button type="submit" className="primary-btn px-5 py-2 align-self-end">Masuk</button>
                </form>
            </div>
        </main>
    );
}