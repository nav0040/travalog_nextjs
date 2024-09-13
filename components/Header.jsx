"use client"
import React, { useEffect, useState } from 'react'
import "../styles/header.css"
import Link from 'next/link'
import { GiHiking } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";



const categories =[
    { name:"home",link:'#'},
    { name:'trending',link:"#trending"},
    { name:"destinations",link:"#destinations"},
    { name:'testimonial',link:'#testimonial'}
]

const Header = () => {

    const [visible, setVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [id, setId] = useState('home');


    const toggleVisible= () => {

        const scrolled = document.documentElement.scrollTop;
        const sections = document.querySelectorAll('section');

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // console.log(secctionTop);
            if(window.scrollY >= sectionTop - 74){
                setId(section.getAttribute("id"))
            }
            
        })
        if(scrolled >0){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }

    useEffect(() => {
        toggleVisible();
        
      window.addEventListener('scroll',toggleVisible)
    
      return () => {
        window.removeEventListener('scroll',toggleVisible)
      }
    }, [])
    
  return (
    <header
    style={{ background: visible || showMenu ? 'var(--bg-main)':'transparent',
        boxShadow: visible ? '2px 20px 30px var(--shadow-color)':'none'
     }}    
    className='w-[100%] fixed top-0 left-0 z-[100] select-none transition-all ease-in-out-[0.3s]'>
        <nav className='w-[100%] max-w-[--max-width] flex justify-around  items-center mx-auto py-[15px] px-[25px]'>
            <Link href="#" className='logo flex items-center gap-3 text-[2.6rem] font-[700]'>
            <GiHiking className=' ' /> Travel
            </Link>
            <div className='menu_btn' onClick={()=> setShowMenu(value => !value)}>

               { showMenu ? <IoMdClose /> : <CiMenuFries /> } 
                
            </div>
            <ul className='flex justify-center items-center' style={{ height: showMenu ? 250 : 0}}>
                { 
                    categories.map(category => (
                        <li key={category.name}>
                            <Link href={category.link} className={`text-[0.9rem] mx-[12px] transition-all ease-[0.3s] capitalize ${id === category.name ? 'active' :''}`}>
                            
                              {category.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        
    </header>
  )
}

export default Header