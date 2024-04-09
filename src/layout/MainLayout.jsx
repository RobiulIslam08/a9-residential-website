
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import {Outlet} from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <div className='font-poppins max-w-[88%] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
            {/* <Footer className="w-full "></Footer> */}
        </div>
    );
};

export default MainLayout;