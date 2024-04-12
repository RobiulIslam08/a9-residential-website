/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Product = ({product}) => {
    const {image,estate_title,description,status,area,price} = product
    return (
       
            <div className="card h-[450px] card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-96" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                   <div className="space-y-2 text-gray-500 font-light">
                   <p>{description}</p>
                    <div className="flex w-[100%] justify-between items-center ">
                     <p >{area}</p>
                     <span className=" border border-green-400 p-2 rounded-lg">for {status}</span>
                    </div>
                    <div className="flex">
                        <p>price:</p>
                        <span>{price}</span>
                    </div>
                   </div>
                  <button className="btn btn-accent">view details</button>
                </div>
            </div>
        
    );
};

export default Product;