import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';



const RootLayout = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <main className='overflow-x-hidden'>
            <Header/>
            <Outlet/>
            
            <Footer/>
        </main>
    );
};

export default RootLayout;