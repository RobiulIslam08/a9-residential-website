import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Details = () => {
  const {id} = useParams()
  const [product, setProduct] = useState('')
  useEffect(()=>{
    fetch('/categories.json')
    .then(res => res.json())
    .then(data => {
        const foundProduct = data.find(p => p.id.toString() === id);
        setProduct(foundProduct)
    })
    .catch(error => {
        console.error( error);
   
      });
    
  },[id])

  console.log(product)
 
    return (
        <div>

            <p>details</p>
            <p>{id}</p>
      <p>Area: {product.area}</p>
      <p>Status: {product.status}</p>
      <p>Price: {product.price}</p>
         
        </div>
    );
};

export default Details;
