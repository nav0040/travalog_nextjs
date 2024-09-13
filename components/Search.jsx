import React from 'react'
import '../styles/search.css'
import { CiCalendarDate, CiLocationArrow1, CiSearch } from 'react-icons/ci'
import { FaUsers } from 'react-icons/fa'

const Search = () => {
  return (
    <section id='search'>
        <strong>Explore Your Dream Place</strong>
        <h2>Find Your Dream Destination</h2>
        <p>Find Your Destination - The Ultimate Guide to Your Dream Destination</p>

        <form>
            <div className='box'>
                <div className="icon">
                <CiLocationArrow1 />
                </div>

                <div className="input">
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' placeholder='Where are you going? ' required />

                </div>
            </div>

            <div className='box'>
                <div className="icon">
                <CiCalendarDate />
                </div>

                <div className="input">
                    <label htmlFor="check-in">Check in</label>
                    <input type="date" id='check-in' required />
                    
                </div>
            </div>

            <div className='box'>
                <div className="icon">
                <CiCalendarDate />
                </div>

                <div className="input">
                    <label htmlFor="check-out">Check out</label>
                    <input type="date" id='check-out' required />
                    
                </div>
            </div> 
            
            
             <div className='box'>
                <div className="icon">
                <FaUsers />
                </div>

                <div className="input">
                    <label htmlFor="travels">Travels</label>
                    <input type="text" id='travels' placeholder='8 Tourists' required />
                    
                </div>
            </div>  

            <button aria-label='search' title='search'>
            <CiSearch />
            </button>


        </form>
    </section>
  )
}

export default Search