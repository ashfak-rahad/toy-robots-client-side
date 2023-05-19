import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const RootLayout = () => {
    return (
        <main className='overflow-x-hidden'>
            <Header/>
            <Outlet/>
            
            <Footer/>
        </main>
    );
};

export default RootLayout;