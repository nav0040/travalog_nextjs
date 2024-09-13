
import Image from 'next/image'

import '../styles/nearby.css'
import Link from 'next/link'


const explores = [
    {
        id: 1,
        name: 'Mill Valley',
        img: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: '05 minutes drive',
        distance: 1480,
    },
    {
        id: 2,
        name: 'Noonu Atoll',
        img: "https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg", 
        time: '09 minutes drive',
        distance: 1480,
    },
    {
        id: 3,
        name: 'Venezia',
        img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        time: '20 minutes drive',
        distance: 1480,
    },
    {
        id: 4,
        name: 'Brown House',
        img: "https://images.pexels.com/photos/531234/pexels-photo-531234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: '10 minutes drive',
        distance: 1480,
    },
    {
        id: 5,
        name: 'Paris',
        img: "https://images.pexels.com/photos/3989821/pexels-photo-3989821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        time: '47 minutes drive',
        distance: 1480,
    },
    {
        id: 6,
        name: 'Brown Temple',
        img: "https://images.pexels.com/photos/3067621/pexels-photo-3067621.jpeg",
        time: '50 minutes drive',
        distance: 1480,
    },
    {
        id: 7,
        name: 'Lazio',
        img: "https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg",
        time: '45 minutes drive',
        distance: 1480,
    },
    {
        id: 8,
        name: 'Eiffel Tower',
        img: "https://images.pexels.com/photos/441585/pexels-photo-441585.jpeg",
        time: '30 minutes drive',
        distance: 1480,
    },
    {
        id: 9,
        name: 'Schwangau',
        img: "https://images.pexels.com/photos/3526084/pexels-photo-3526084.jpeg",
        time: '55 minutes drive',
        distance: 1480,
    },
]
const Nearby = () => {
    return (
        <section id='explore'>
            <div className="heading">
                <h2>Explore Nearby</h2>
                <p>5,400 beautifuk places to go</p>
            </div>

            <div className='wrapper'>
                {
                    explores.map(explore => (
                        <div className='card' key={explore.id}>
                            <Image src={explore.img} alt={explore.img} width={100} height={100} />
                            <Link href={'#'}>{explore.name}</Link>
                            <p>{explore.name}</p>
                            <span>{explore.distance}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Nearby