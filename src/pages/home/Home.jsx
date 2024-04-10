import { Helmet } from "react-helmet-async";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>home</title>
            </Helmet>
            <Slider></Slider>
            <Categories></Categories>
        </div>
    );
};

export default Home;