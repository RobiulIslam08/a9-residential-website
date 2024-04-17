import { useEffect, useState } from "react";
import Product from "../product/Product";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Categories = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='mb-[100px] '>
            <h1 className="text-center font-bold text-xl lg:text-3xl mt-[100px] "data-aos="fade-down-right">Our Properties</h1>
            <p className="text-sm lg:text-base text-gray-600 text-center mt-4 lg:mt-8">We are very sensitive for choice your home . if you want a looking of beautiful home for you, this is best choise</p>
           <div className="grid md:gap-6 gap-5 lg:gap-8 mt-[100px] md:grid-cols-2 lg:grid-cols-3">
           { 
             
             products.map(product => <Product product={product} key={product.id}></Product>)
         
        }
           </div>
       
        </div>
    );
};

export default Categories;