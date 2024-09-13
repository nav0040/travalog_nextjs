'use client'
import React from 'react'
import '../styles/testimonials.css'
import img1 from '../src/images/ts.png'
import Image from 'next/image'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const testimonials = [
    {
        id: 1,
        name: "Herea",
        avatar: 'https://images.pexels.com/photos/11164546/pexels-photo-11164546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam id ex fuga.'
    },
    {
        id: 2,
        name: "Herea",
        avatar: 'https://images.pexels.com/photos/2557171/pexels-photo-2557171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam id ex fuga.'
    },
    {
        id: 3,
        name: "Herea",
        avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam id ex fuga.'
    },
    {
        id: 4,
        name: "Herea",
        avatar: 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam id ex fuga.'
    },
    {
        id: 5,
        name: "Herea",
        avatar: 'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam id ex fuga.'
    },
    {
        id: 6,
        name: "Herea",
        avatar: 'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam id ex fuga.'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonial'>
            <div className="img-container">
                <Image src={img1} width={488} height={482} alt='image' />
            </div>

            <div className="slider">
                <h2>Client&apos;s Reviews</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nam similique enim? Facilis voluptate est laborum!</p>


                <Swiper
                    slidesPerview={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                   
                >

                    {
                        testimonials.map(testimonial => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="card" >
                                    <div className="text">
                                        <i className='fas fa-quote-left'></i>
                                        <p>{testimonial.text}</p>
                                        <strong>{testimonial.name}</strong>
                                    </div>
                                    <div className="avatar">
                                        <Image
                                            src={testimonial.avatar}
                                            width={100} height={100}
                                            alt='image'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>




            </div>
        </section>
    )
}

export default Testimonials