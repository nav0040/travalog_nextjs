import Image from 'next/image'
import React from 'react'
import '../styles/destinations.css'



const destinations = [
  
    {
        id:1,
        name:'Lion Gate Bridge',
        location:'Canada',
        stars:4.8,
        price:40,
        img:"https://images.pexels.com/photos/4485630/pexels-photo-4485630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        name:'OR',
        location:'United States',
        stars:4.8,
        price:91,
        img:"https://images.pexels.com/photos/10401873/pexels-photo-10401873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:3,
        name:'Bronte, Australia',
        location:'Bronte Baths',
        stars:4.8,
        price:50,
        img:"https://images.pexels.com/photos/7823945/pexels-photo-7823945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        name:'Mountain',
        location:'Nordland, Norway',
        stars:4.8,
        price:96,
        img:"https://images.pexels.com/photos/3535417/pexels-photo-3535417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:5,
        name:'Grey Metal Statue',
        location:'Montreux, Switzerland',
        stars:4.8,
        price:69,
        img:"https://images.pexels.com/photos/825430/pexels-photo-825430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:6,
        name:'Superstition Mountains',
        location:'United States',
        stars:4.8,
        price:76,
        img:"https://images.pexels.com/photos/3446254/pexels-photo-3446254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

]
const Destinations = () => {
  return (
    <section id='destinations'>
        <div className="heading">
            <h2>Popular Destinations</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ut quasi culpa earum porro. Iusto!</p>

        </div>

        <div className='grid'>
            { 
            
               destinations.map((destination,index) => (
                <div className={`card card-${index}`} key={destination.id}>
                    <Image src={destination.img} alt={destination.img} width={600} height={600}/>

                    <div className='box'>
                        <span className='star'>
                            <i className='fa-solid fa-star'></i> {destination.stars}
                        </span>

                        <div className='group'>
                            <div className='text'>
                                <strong>{destination.name}</strong>
                                <span><i className='fas fa-map-marker-alt'></i> {destination.location}</span>
                            </div>

                            <span className='price'>${destination.price}</span>
                        </div>
                    </div>
                </div>
               ))
            
            
            }
        </div>
    </section>
  )
}

export default Destinations