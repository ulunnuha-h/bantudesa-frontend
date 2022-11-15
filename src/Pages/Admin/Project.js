import React from "react";
import searchIcon from "../../Assets/icons/search.svg";

const cardStyle = {
    border : 'solid 1px var(--color-2)',
    borderRadius : '3px'
}

export const Project = () => {
    return(
        <div className=" p-3 box-shadow mx-3 mt-5" style={cardStyle}>
            <h4>Proyek Terbaru</h4>
            <form className="d-flex justify-content-end search-input w-50 mt-3 mt-lg-0" role="search">
                    <input className="py-2 px-3 w-100" type="search" placeholder="Cari Proyek"/>
                    <button className="p-2" type="submit">
                        <img src={searchIcon}/>
                    </button>
                </form>
            <section className="d-flex justify-content-end">
                <button className="primary-btn px-3 py-2">Tambah Proyek</button>
            </section>
            <div style={cardStyle} className="my-3">
                <ul style={{listStyle:'none'}} className="my-2 p-0">
                    <li className="d-flex m-0 justify-content-between px-2">
                        <span className="w-75 d-flex align-items-center">
                            <span className="bg-dark h-100 me-2" style={{aspectRatio:'1/1'}}>tes</span>
                            <span>
                                <h5 className="m-0">Pembangunan Rumah Warga Terdampak COVID-19</h5>
                                <span style={{fontSize:'10px'}}>Batas pengajuan proposal pada <b>27 Agustus 2022</b></span>
                            </span>
                        </span>
                        <span className="d-flex align-items-center">
                            <button className="primary-btn py-1 px-2 mx-1">Lihat Proposal</button>
                            <button className="delete-btn py-1 px-3 mx-1">Hapus</button>
                        </span>
                    </li>
                </ul>
            </div>                
            <section className="d-flex justify-content-end">
                <button className="primary-btn px-3 py-2">Lebih Banyak</button>
            </section>
        </div>
    )
}