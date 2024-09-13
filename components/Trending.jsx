"use client"
import React from 'react'
import '../styles/trending.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaGlobeAmericas } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const trends = [
    {
        id: 1,
        name: 'Seoul, South Korea',
        location: 'Bukchon Hanok Village',
        img: 'https://images.pexels.com/photos/6896969/pexels-photo-6896969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        activities: 10,
        places: 12,
        days: '1 weeks',
        price: 1.2
    },
    {
        id: 2,
        name: 'Green Round Islands of Blue Water',
        location: 'North Province, Maldives',
        img: 'https://images.pexels.com/photos/9080916/pexels-photo-9080916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        activities: 10,
        places: 12,
        days: '1 weeks',
        price: 2.2
    },
    {
        id: 3,
        name: 'White and Brown Wooden Gazebo',
        location: 'Maldives',
        img: 'https://images.pexels.com/photos/9080930/pexels-photo-9080930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        activities: 10,
        places: 12,
        days: '1 weeks',
        price: 1.2
    },
    {
        id: 4,
        name: 'Ancient Temples in Bangkok',
        location: 'Phra Nakhon Si ayutthaya, Thailand',
        img: 'https://images.pexels.com/photos/6727127/pexels-photo-6727127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        activities: 10,
        places: 12,
        days: '1 weeks',
        price: 1.2
    },
    {
        id: 5,
        name: 'Lake and Mountain',
        location: 'Field, AB, Canada',
        img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        activities: 10,
        places: 12,
        days: '1 weeks',
        price: 1.2
    },
]

const Trending = () => {
    return (
        <section id='trending'>
            <div className="heading">
                <h2>Trending 2023</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, non.</p>
            </div>

            <div className="wrapper">
                <Swiper
                    slidesPerview={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        800:{
                            slidesPerView:2,
                            spaceBetween:10,
                        },
                        1100:{
                            slidesPerView:3,
                            spaceBetween:20,
                        }
                    }}
                    className='img-container w-[100%] h-[100%]'
                >

                    {
                        trends.map(trend => (
                            <SwiperSlide key={trend.id}>
                                <div className="card" >
                                    <div className="title">
                                        <span><i className='fas fa-map-marker-alt'></i>{trend.location}</span>
                                        <Link href={'#'} >{trend.name}</Link>
                                    </div>

                                    <div className='img-container'>
                                        <Image src={trend.img} alt={trend.img} width={350} height={170} />
                                    </div>
                                    <div className="text">
                                        <span>
                                            <i className="fa-solid fa-shoe-prints">{trend.activities} Activities</i>

                                        </span>
                                        <span>
                                            <i className="fa-solid fa-compass">{trend.places} Places</i>

                                        </span>
                                        <span>
                                            <i className="fa-solid fa-calendar-days">{trend.days}</i>

                                        </span>
                                    </div>

                                    <hr />

                                    <div>
                                        <p>From ${trend.price} <span>/Person</span></p>
                                        <Link href={"#"}>Book Now</Link>
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

export default Trending