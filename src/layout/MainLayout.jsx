import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import {Outlet} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const MainLayout = () => {
    // const {loading} = useContext(AuthContext)
    // if(loading){
    //     return <span className="flex  justify-center items-center  h-full loading loading-spinner loading-lg"></span>
    // }
    return (
        <div className="font-poppins w-full">
            <div className="w-[95%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;