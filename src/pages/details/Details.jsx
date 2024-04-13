import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdPanoramaVerticalSelect } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Details = () => {
  const { id } = useParams()
  const [product, setProduct] = useState('')
  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(p => p.id.toString() === id);
        setProduct(foundProduct)
      })
      .catch(error => {
        console.error(error);

      });

  }, [id])

  console.log(product)

  return (
    <div>

      <div className="hero  bg-base-200 mb-11">
        <div className="hero-content flex-col lg:flex-row">
          <img src={product.image} className="max-w-sm h-[500px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{product.estate_title}</h1>
          <div className="text-gray-600">
          <div className="flex items-center gap-2">
              <MdPanoramaVerticalSelect />
              <p className="py-6">{product.segment_name}</p>
            </div>
            <p>{product.description} this product is very new and you can buy it. {product.description}</p> <hr className="my-4"></hr>
            <div className="flex gap-20 items-center mb-6">
              <div className="flex gap-4 items-center">
                <IoLocationSharp />
                <p>{product.location}</p>
              </div>
              <div className="flex gap-4 items-center">
              <FaChartArea />
                <p>{product.area}</p>
              </div>
              <p className="border border-green-500 p-1 rounded-xl hover:bg-green-200">for {product.status}</p>
            </div>
         
          

            <div className="flex gap-5">
              <p className="font-semibold ">facilitily:</p>

            {
            product.facilities && product.facilities.length> 0 ? (
              product.facilities.map((facilitily, index) => <p key={index}>{facilitily}</p>)
            ):(<p>No facilities Listed</p>)

          }
      
            </div>
            <p className="mt-2"><span className="font-semibold text-lg">Price:</span> {product.price}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
{/* <MdPanoramaVerticalSelect /> */ }