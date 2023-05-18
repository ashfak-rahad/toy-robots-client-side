import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../pages/Gallery';

const RootLayout = () => {
    return (
        <main>
            <Header/>
            <Outlet/>
            
            <Footer/>
        </main>
    );
};

export default RootLayout;