import { useEffect, useState } from "react";
import Product from "../product/Product";





const Categories = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='mb-[100px]'>
            <h1 className="text-center font-bold text-3xl mt-[100px]">Our Products</h1>
           <div className="grid gap-5 mt-[100px] md:grid-cols-2 lg:grid-cols-3">
           {
             
             products.map(product => <Product product={product} key={product.id}></Product>)
         
        }
           </div>
       
        </div>
    );
};

export default Categories;