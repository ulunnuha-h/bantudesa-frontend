import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { ProjectCard } from "./ProjectCard";
import 'swiper/css';
import "swiper/css/pagination";

export const ProjectSlider = () => {
    return(
    <Swiper
    slidesPerView={"auto"}
    className="grab-cursor"
    >
        <SwiperSlide className="w-auto">
            <ProjectCard max={200}/>
        </SwiperSlide>
        <SwiperSlide className="w-auto">
            <ProjectCard max={200}/>
        </SwiperSlide>
        <SwiperSlide className="w-auto">
            <ProjectCard max={200}/>
        </SwiperSlide>
        <SwiperSlide className="w-auto">
            <ProjectCard max={200}/>
        </SwiperSlide>
        <SwiperSlide className="w-auto">
            <ProjectCard max={200}/>
        </SwiperSlide>
    </Swiper>
    )
}