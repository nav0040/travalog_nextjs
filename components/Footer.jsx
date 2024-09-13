import Link from 'next/link'
import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="box">
                <strong>Travel</strong>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, molestiae.</p>

                <div className='social'>
                    <Link href={'#'} aria-label='facebook' title='facebook'>
                       <i className='fab fa-facebook-f'></i>
                    </Link>

                    <Link href={'#'} aria-label='twitter' title='twitter'>
                       <i className='fab fa-twitter'></i>
                    </Link>

                    <Link href={'#'} aria-label='instagram' title='instagram'>
                       <i className='fab fa-instagram'></i>
                    </Link>

                    <Link href={'#'} aria-label='github' title='github'>
                       <i className='fab fa-github'></i>
                    </Link>
                </div>
            </div>

            <div className='box'>
               <strong>Links</strong>
               <ul className="li"><Link href={"#home"}>Home</Link></ul>
               <ul className="li"><Link href={"#trending"}>Trending</Link></ul>
               <ul className="li"><Link href={'#destinations'}>Destinations</Link></ul>
               <ul className="li"><Link href={"#testimonial"}>Testimonials</Link></ul>
               <ul className="li"><Link href={'#'}>Book Online</Link></ul>
            </div>

            <div className='box'>
               <strong>Extra Links</strong>
               <ul className="li"><Link href={"#search"}>Find Destinations</Link></ul>
               <ul className="li"><Link href={"#explore"}>Explore Nearby</Link></ul>
               <ul className="li"><Link href={'#subscribe'}>Subscribe</Link></ul>
               <ul className="li"><Link href={"#"}>Privacy Policy</Link></ul>
               <ul className="li"><Link href={'#'}>Terms Of Use</Link></ul>
            </div>

            <div className="box">
                <strong>Contact</strong>
                <span><i className="fas fa-map-marker-alt"></i>abc, Canada</span>
                <span><i className="fas fa-envelope"></i>example@gmail.com</span>
                <span><i className="fas fa-phone-square-alt"></i>123456789</span>

            </div>
        </div>

        <span className="copyright">
            @2023 - All Copyright Reserved
        </span>
    </footer>
  )
}

export default Footer