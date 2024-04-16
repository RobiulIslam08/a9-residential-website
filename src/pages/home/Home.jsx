import { Helmet } from "react-helmet-async";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import Team from "../../components/team/Team";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>home</title>
            </Helmet>
            <Slider></Slider>
            <Categories></Categories>
            <Team></Team>
        </div>
    );
};

export default Home;