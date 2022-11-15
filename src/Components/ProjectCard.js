import React, { useEffect, useState } from "react";
import cover from '../Assets/cardproyekcover.jpg'
import {useNavigate} from 'react-router-dom'

export const ProjectCard = () => {
    const nav = useNavigate();

    return(
        <div className="card-container p-2">
            <div className="rounded" style={{cursor:'pointer',maxWidth:'300px'}} onClick={()=>nav('/project/1')}>
                <div style={{backgroundImage:`url(${cover})`,height:'165px',backgroundSize:'cover'}}/>
                <div className="p-3">
                    <h6 style={{lineHeight:'21px'}} className="mb-1">Pembangunan Rumah Warga Terdampak COVID-19</h6>
                    <section style={{fontSize:'8px'}} className="mb-3">Desa Winongsari, Kabupaten Malang</section>
                    <section style={{fontSize:'10px'}}>Batas pengajuan proposal pada <b>27 Agustus 2022</b></section>
                </div>
            </div>  
        </div>
    )
}