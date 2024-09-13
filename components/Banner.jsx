"use client"
import React from 'react'
import '../styles/banner.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGlobeAmericas } from "react-icons/fa";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const images =[
  "https://images.pexels.com/photos/1374389/pexels-photo-1374389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1182971/pexels-photo-1182971.jpeg",
  "https://images.pexels.com/photos/5461555/pexels-photo-5461555.jpeg"
]
const Banner = () => {
  return (
    <section id='home' className='banner w-[100%] h-[100vh] overflow-hidden relative'>
       <Swiper
        slidesPerview={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination, Navigation]}
        navigation={true}
        loop={true}
        className='img-container w-[100%] h-[100%]'
       >

        {
          images.map((image,index)=> (
             <SwiperSlide key={index}>
              <Image src={image} alt={image} width={1920} height={1280} priority />

             </SwiperSlide>
          ))
        }
       </Swiper>
       <div className='box max-w-[650px] absolute top-[50%] left-0 translate-y-[-50%] mx-[50px] z-[1]'>
        <strong className='text-[#fefefe] flex items-center gap-4'>Explore The World <FaGlobeAmericas /></strong>
        <h1 className='text-[3rem] font-[700] tracking-[1px] leading-[3.8rem] my-[10px] text-[#fff]'>It's a Big World Out There, Go Explore</h1>
        <p className='text-[#fefefe] font-[0.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente officiis rerum nostrum vero unde iste!</p>
        <Link href={'#'} className='w-[180px] h-[50px] text-[#333] bg-[#fff] flex justify-center items-center font-[600] rounded-[10px] mt-[25px] transition-all ease-[0.3s] hover:text-[#fff] hover:bg-[#333]'>Explore Now</Link>
       </div>
    </section>
  )
}

export default Banner