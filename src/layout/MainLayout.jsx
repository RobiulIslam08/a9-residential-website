import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import {Outlet} from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;