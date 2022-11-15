import React from "react";
import { ProjectCard } from "../Components/ProjectCard";
import { ProjectSlider } from "../Components/ProjectSlider";
import { StudentControl } from "../Components/StudentControl";
import ReactPaginate from 'react-paginate';

export const Project = () => {
    const pageHandler = ({selected}) => {
        console.log(selected)
    }

    return(
        <>
            <h1 className="text-center my-5" style={{fontWeight:'bold',color:'var(--color-2)'}}>Pilih proyek sesuai keahlianmu</h1>
            <div className="container-lg">
                <div className="row row-cols-4">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
                <ReactPaginate
                    pageCount={7}
                    containerClassName="project-pagination d-flex justify-content-end my-3"
                    previousLabel="<"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    nextLabel=">"
                    pageClassName="page-item"
                    activeClassName="page-item active"
                    onPageChange={pageHandler}
                />
            </div> 
        </>
    );
}

export const ProjectDetail = () => {
    return(
        <main className="container-lg mt-5">
            <div className="row">
                <div className="col-4">
                    <div className="bg-dark" style={{height:'500px'}}>
                        hello
                    </div>
                    <section className="mt-2 d-flex">
                        <div className="bg-danger me-2" style={{height:'100px',aspectRatio:'1/1'}}/>
                        <div className="bg-danger me-2" style={{height:'100px',aspectRatio:'1/1'}}/>
                        <div className="bg-danger me-2" style={{height:'100px',aspectRatio:'1/1'}}/>
                    </section>
                </div>
                <div className="col-5">
                    <h2 className="pe-3">Pembangunan Rumah Warga Terdampak COVID-19</h2>
                    <span>Desa Winongsari, Kabupaten Malang</span>
                    <h5 className="my-4">Batas pengajuan proposal pada <b>27 Agustus 2022</b></h5>
                    <div className="p-3" style={{backgroundColor:'var(--color-2)',color:'var(--color-5)'}}>
                        Desa Winongsari merupakan desa yang terletak di perbatasan antara kabupaten Malang dan kabupaten Blitar, serta Kediri. Memiliki 310 penduduk, desa Winongsari dikenal sebagai desa penghasil buah Sirsak yang diimpor ke luar negeri oleh pemerintah setempat. 
                    </div>
                    <ol className="my-3">
                        <li className="mt-2">
                            <span>Deskripsi Proyek :</span>
                            <ul style={{listStyleType:'disc'}}>
                                <li>COVID-19 membuat para warga di desa kami mengalami penurunan ekonomi, sehingga sekarang ketika dana desa telah diturunkan oleh pemerintah desa, kami membutuhkan mahasiswa Teknik Sipil yang memiliki kemauan dan inovasi untuk membantu membangun kembali rumah-rumah warga di sekitar desa Winongsari.</li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            <span>Batas Dana :</span>
                            <ul style={{listStyleType:'disc'}}>
                                <li>Rp 50.000.000</li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            <span>Kriteria Proposal :</span>
                            <ul style={{listStyleType:'disc'}}>
                                <li>Identitas</li>
                                <li>Konsep</li>
                                <li>Desain</li>
                                <li>Rancangan Anggaran Biaya</li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            <span>Narahubung :</span>
                            <ul style={{listStyleType:'disc'}}>
                                <li>08123456789123 (Whatsapp)</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="col-3">
                    <StudentControl/>
                </div>
            </div>
            <div className="mt-5">
                <h2>Proyek Lainnya</h2>
                <ProjectSlider/>
            </div>
        </main>
    )
}