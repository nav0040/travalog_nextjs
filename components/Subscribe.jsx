import React from 'react'
import "../styles/subscribe.css"
import Image from 'next/image'
import img2 from '../src/images/sub.png'
import { CiSearch } from 'react-icons/ci'

const Subscribe = () => {
  return (
    <section id='subscribe'>
        <div className="text">
            <h2>Subscribe Our Newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, harum.</p>

            <form >
                <input type="email" required placeholder='Enter Your Email'/>
                <button aria-label='send' title='send' className='flex justify-center items-center'>
                <CiSearch color='white'  />

                </button>
                
            </form>
        </div>

        <div className='img-container'>
            <Image
              src={img2}
              width={488}
              height={482}
              alt='image'
            />
        </div>
    </section>
  )
}

export default Subscribe