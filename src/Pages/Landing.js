import React from "react";
import bg from '../Assets/landing_background.jpg';
import { ProjectCard } from "../Components/ProjectCard";
import icon1 from '../Assets/icons/outline-chart.svg';
import icon2 from '../Assets/icons/selection-search.svg';
import icon3 from '../Assets/icons/phone-call.svg';
import checkMark from '../Assets/icons/check-mark.svg';
import { Testimoni } from "../Components/Testimoni";
import {useNavigate} from "react-router-dom";
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import testi1 from '../Assets/testi1.jpg';
import testi2 from '../Assets/testi2.jpg';
import testi3 from '../Assets/testi3.jpg';
import './style.css';


export const Landing = () => {
    const navigate = useNavigate();

    const nav = (to) => {
        window.scroll(0,0);
        navigate(to);
    }

    return(
        <>
            <div style={{height:'500px',backgroundImage:`url(${bg})`,backgroundSize:'cover'}}>
                <div className="landing-title container-lg d-flex flex-column justify-content-center h-100">
                    <h1 className="col-12 col-lg-8 p-0 text-center text-lg-start">
                        Kembangkan desa Anda dengan para mahasiswa terbaik!
                    </h1>
                    <section className="text-center text-lg-start">
                        <button className="primary-btn align-self-start px-4 py-2" onClick={()=>nav('sign')}>Mulai Sekarang</button>
                    </section>
                </div>
            </div>
            <div className="container-lg" id="proyek">
                <div className="my-5 d-flex flex-column">
                    <h3>Proyek Terbaru</h3>
                    <section className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </section>
                    <button 
                        className="primary-btn align-self-center mt-3 mt-lg-5 mb-5 px-4 py-2"
                        onClick={()=>nav('project')}>
                        Lebih Banyak
                    </button>
                </div>
                <div className="p-5 pb-0" style={{backgroundColor:'var(--color-2)'}}>
                    <h4 className="text-light text-center">3 Langkah Mudah Menggunakan Platform bantuDesa</h4>
                    <div className="row row-cols-lg-3 row-cols-1">
                        <div className="d-flex justify-content-center align-items-center p-lg-5 p-4 flex-column">
                            <img src={icon1} className="w-25 mb-lg-5 mb-3" alt="icon"/>
                            <h6 className="text-white text-center">1. Jelaskan Kebutuhan Anda</h6>
                            <p className="m-0 text-white text-light text-center px-0 px-lg-3" style={{fontSize:'11px'}}>Informasi mengenai kebutuhan pembangunan desa Anda sangatlah berguna untuk calon tim terbaik yang akan membantu Anda.</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center p-lg-5 p-4 flex-column">
                            <img src={icon2} className="w-25 mb-lg-5 mb-3" alt="icon"/>
                            <h6 className="text-white text-center">2. Seleksi Proposal</h6>
                            <p className="m-0 text-white text-light text-center px-0 px-lg-3" style={{fontSize:'11px'}}>Seleksi seluruh proposal yang telah masuk setelah masa pengajuan berakhir.</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center p-lg-5 p-4 flex-column">
                            <img src={icon3} className="w-25 mb-lg-5 mb-3" alt="icon"/>
                            <h6 className="text-white text-center">3. Rekrut Tim Terbaik</h6>
                            <p className="m-0 text-white text-light text-center px-0 px-lg-3" style={{fontSize:'11px'}}>Segera hubungi tim dengan proposal terbaik dan mulai pembangunan desa Anda segera.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 p-5" style={{backgroundColor:'rgba(68, 120, 120, 0.1)'}}>
                <div className="container-lg row row-cols-1 row-cols-lg-2 m-auto p-0 text-center text-lg-start">
                    <section>
                        <h3 style={{color:'black'}} className="mb-4">Mengapa Anda harus menggunakan platform bantuDesa?</h3>
                        <ul style={{listStyle:'none'}} className="p-0">
                            <li>
                                <section className="row align-items-center">
                                    <img src={checkMark} className="d-none d-lg-inline col-auto"/>
                                    <h5 className="ps-0 me-lg-2 ms-lg-0 mx-auto col-10 mb-0"> Langkah mudah untuk membangun desa Anda</h5>
                                </section>
                                <p className="me-lg-5 me-0 mb-5">Hanya dengan 3 langkah, Anda sudah bisa mencari dan mendapat tenaga kerja ahli dari kalangan mahasiswa!</p>
                            </li>
                            <li>
                                <section className="row align-items-center">
                                    <img src={checkMark} className="d-none d-lg-inline col-auto"/>
                                    <h5 className="ps-0 me-lg-2 ms-lg-0 mx-auto col-10 mb-0">Dapatkan inovasi terbaru sesuai permasalahan Anda</h5>
                                </section>                                
                                <p className="me-lg-5 me-0 mb-5">Mahasiswa memiliki begitu banyak inovasi yang cemerlang untuk membantu menyelesaikan permasalahan yang ada di desa Anda!</p>
                            </li>
                            <li>
                                <section className="row align-items-center">
                                    <img src={checkMark} className="d-none d-lg-inline col-auto"/>
                                    <h5 className="ps-0 me-lg-2 ms-lg-0 mx-auto col-10 mb-0">Jadikan desa Anda sebagai desa unggulan</h5>
                                </section>
                                <p className="me-lg-5 me-0 mb-5">Untuk mendukung pemulihan ekonomi pasca pandemi, jadikan desa Anda sebagai desa unggulan!</p>
                            </li>
                        </ul>
                    </section>
                    <section className="d-none d-lg-block" style={{backgroundImage:`url(${image1})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
                </div>
            </div>
            <div className="container-lg" id="testimoni">
                <h3 className="text-center mt-5 mb-3">Testimoni</h3>
                <div className="row row-cols-1 row-cols-lg-3 mb-5">
                    {testimoniData.map((data)=>
                        <Testimoni {...data}/>
                    )}
                </div>
                <div className="w-75 m-auto d-flex mb-5" style={{backgroundColor:'var(--color-2)'}}>
                    <img src={image2}/>
                    <section className="d-flex flex-column justify-content-center align-items-start mx-5 text-light" style={{fontWeight:'600'}}>
                        <h5 className="mb-4">Masih ada yang ingin anda tanyakan ?</h5>
                        <button className="px-3 py-2 contact-btn">Hubungi Kami</button>
                    </section>
                </div>
            </div>
        </>
    )
}

const testimoniData = [
    {
        name : 'Warno Hambali',
        content : 'Sebagai kepala desa, platform bantuDesa ini membuat inovasi sangat bertumbuh dengan cepat untuk membantu pembangunan yang terdapat di desa saya. Saya juga merasa terbantu untuk lebih mengenal berbagai mahasiswa dan bekerja sama dengan mereka.',
        title : 'Kepala Desa Winongsari',
        image : testi1
    },
    {
        name : 'Rani Maria',
        content : '2 bulan yang lalu, saya merasa kebingungan untuk mencari proyek akhir sebagai bahan untuk kuliah praktik saya, karena selama ini saya belum memiliki pengalaman. Namun, dengan adanya platform ini sangat membantu saya dalam mencari proyek yang benar-benar dapat membantu masyarakat khususnya di desa.',
        title : 'Mahasiswa Tingkat Akhir',
        image : testi2
    },
    {
        name : 'Retno Martini',
        content : 'Platform ini memberikan terobosan baru yang memberikan bantuan cepat dan tepat untuk pemerintah dalam pemerataan pembangunan desa dan juga pengembangan kemampuan dari para mahasiswa.',
        title : 'Pemerintah Daerah',
        image : testi3
    },
]