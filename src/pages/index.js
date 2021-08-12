import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { 
    homeObjOne, 
    homeObjTwo, 
    homeObjThree 
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />  
          <HeroSection />
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <InfoSection {...homeObjThree} />
          <Services />
          <Footer />
        </>
    );
};

export default Home;

