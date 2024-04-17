// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { MdPanoramaVerticalSelect } from "react-icons/md";
// import { FaChartArea } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";

// const Details = () => {
//   const { id } = useParams()
//   const [product, setProduct] = useState('')
//   useEffect(() => {
//     fetch('/categories.json')
//       .then(res => res.json())
//       .then(data => {
//         const foundProduct = data.find(p => p.id.toString() === id);
//         setProduct(foundProduct)
//       })
//       .catch(error => {
//         console.error(error);

//       });

//   }, [id])

//   console.log(product)

//   return (
//     <div>

//       <div className="hero  bg-base-200 mb-11">
//         <div className="hero-content flex-col lg:flex-row">
//           <img src={product.image} className="h-[500px] w-[300px] lg:w-[350px] rounded-lg shadow-2xl" />
//           <div>
//             <h1 className="text-3xl font-bold">{product.estate_title}</h1>
//           <div className="text-gray-600">
//           <div className="flex items-center gap-2"> 
//               <MdPanoramaVerticalSelect />
//               <p className="py-6">{product.segment_name}</p>
//             </div>
//             <p>{product.description} this product is very new and you can buy it. {product.description}</p> <hr className="my-4"></hr>
//             <div className="flex gap-20 items-center mb-6">
//               <div className="flex gap-4 items-center">
//                 <IoLocationSharp />
//                 <p>{product.location}</p>
//               </div>
//               <div className="flex gap-4 items-center">
//               <FaChartArea />
//                 <p>{product.area}</p>
//               </div>
//               <p className="border border-green-500 p-1 rounded-xl hover:bg-green-200">for {product.status}</p>
//             </div>



//             <div className="flex gap-5">
//               <p className="font-semibold ">facilitily:</p>

//             {
//             product.facilities && product.facilities.length> 0 ? (
//               product.facilities.map((facilitily, index) => <p key={index}>{facilitily}</p>)
//             ):(<p>No facilities Listed</p>)

//           }

//             </div>
//             <p className="mt-2"><span className="font-semibold text-lg">Price:</span> {product.price}</p>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

// ------------------------------------------
// {/* <MdPanoramaVerticalSelect /> */ }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
    <div className='mb-8 lg:mb-20'>
      {/* <img src={product.image} className='w-full  h-[300px]' alt="" /> */}
      <div className="relative w-full h-[300px]">
        <img src={product.image} className='w-full h-full object-cover absolute' alt={product.estate_title || 'Product Image'} />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <p   className='relative text-2xl flex justify-center items-center top-14 font-semibold text-white'>{product.segment_name}</p>
      </div>
      <h1  data-aos="fade-right" className="lg:text-3xl  text-xl font-bold my-5 lg:my-9">{product.estate_title}</h1>
      <p  data-aos="fade-right" className="text-gray-600 mb-5 lg:mb-8">{product.description} this product is very new and you can buy it. {product.description}</p>
      <div className="overflow-x-auto">
        <table  data-aos="fade-right" className=" border border-slate-500 w-full text-gray-600">

          <tbody>
            <tr >
              <td className="border border-slate-700 font-semibold">Price</td>
              <td className="border border-slate-700 ">{product.price}</td>
            </tr>
            <tr>
              <td className="border border-slate-700 font-semibold">status</td>
              <td className="border border-slate-700 ">{product.status}</td>
            </tr>
            <tr>
              <td className="border border-slate-700 font-semibold">area</td>
              <td className="border border-slate-700 ">{product.area}</td>
            </tr>
            <tr>
              <td className="border border-slate-700 font-semibold">location</td>
              <td className="border border-slate-700 ">{product.location}</td>
            </tr>
            <tr>
              <td className="border border-slate-700 font-semibold">facilities</td>
              {/* <td className="border border-slate-700 ">{  product.facilities.map(facilitily, index) => {<p key={index}>{facilitily}</p>}</td> */}
              <td className="border border-slate-700 ">

                {
                  product.facilities ? product.facilities.map((f, i) => (<div key={i}>{f}</div>)) : "no facilities listed"
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;