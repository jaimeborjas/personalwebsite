import React, {useState} from 'react'
import Maincontent from '../components/Maincontent'
import { mainContentObject } from '../components/Maincontent/data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Maincontent/>
        </>
    )
}

export default Home
