import React from "react";
import logo from '../Assets/logo.svg'
import fb from '../Assets/icons/fb.svg'
import ig from '../Assets/icons/ig.svg'
import yt from '../Assets/icons/yt.svg'

export const Footer = () => {
    return(
        <div className="container-lg p-3 d-flex justify-content-between align-items-center">
            <img src={logo} width="80"/>
            <span style={{fontSize:'10px'}}>© Copyright bantuDesa 2022</span>
            <section>
                <a href="#" className="px-1"><img src={fb}/></a>
                <a href="#" className="px-1"><img src={ig}/></a>
                <a href="#" className="px-1"><img src={yt}/></a>
            </section>
        </div>
    )
}
