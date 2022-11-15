import React from "react";

const cardStyle = {
    border : 'solid 1px var(--color-2)',
    borderRadius : '3px'
}

export const Home = () => {
    return(
        <>
            <div className="row m-0 mt-5">
                <div className="col-9 px-3">
                    <div className="w-100 p-3 box-shadow" style={cardStyle}>
                        <h4>Proyek Terbaru</h4>
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
                </div>
                <div className="col-3 px-0 pe-3">
                    <div className="box-shadow" style={{borderRadius:'3px',overflow:'hidden',border:'solid 1px var(--color-2)'}}>
                        <div className="bg-dark w-100" style={{height:'170px'}}></div>
                        <h5 className="text-center my-4">Desa Winongsari</h5>
                        <div className="row m-0 p-3">
                            <div className="col-6 p-0 pe-3">
                                <div className="primary-btn d-flex flex-column jusitfy-content-center align-items-center py-2 mb-5">
                                    <h1 className="m-0">10</h1>
                                    <span className="text-center" style={{fontSize:'10px'}}>Proposal telah dibuat</span>
                                </div>
                            </div>
                            <div className="col-6 p-0">
                                <div className="primary-btn d-flex flex-column jusitfy-content-center align-items-center py-2 mb-5">
                                    <h1 className="m-0">34</h1>
                                    <span className="text-center" style={{fontSize:'10px'}}>Proposal sedang diseleksi</span>
                                </div>
                                <button className="primary-btn py-2 w-100">Pengaturan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}