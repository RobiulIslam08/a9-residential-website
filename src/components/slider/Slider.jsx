
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// const Slider = () => {
//     return (
//         <>
//             <Swiper
//                 style={{
//                     '--swiper-navigation-color': '#fff',
//                     '--swiper-pagination-color': '#fff',
//                 }}
//                 lazy={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper  h-[500px]"
//             >
//                 <SwiperSlide>
//                     <img className='w-full bg-cover'
//                         src="
//                         https://i.ibb.co/M7fDFkQ/SOHL0122005-780x440-mobile.jpg"
//                         loading="lazy"
//                     />
//                     <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         className='w-full'
//                         src="https://i.ibb.co/Jdgs6Fj/kda-townhouses.jpg"
//                         loading="lazy"
//                     />
//                     <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         className='w-full'
//                         src="https://i.ibb.co/z6Bf5my/apartments.jpg"
//                         loading="lazy"
//                     />
//                     <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         className='w-full'
//                         src="https://i.ibb.co/KyDh6FS/images-1.jpg"
//                         loading="lazy"
//                     />
//                     <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         className='w-full'
//                         src="https://i.ibb.co/zJGvT8P/senior-living-community.jpg"
//                         loading="lazy"
//                     />
//                     <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         className='w-full'
//                         src="https://i.ibb.co/ctgySqc/vacation-rentals.jpg"
//                         loading="lazy"
//                     />
//                     <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
//                 </SwiperSlide>
               
//             </Swiper>

//         </>
//     );
// };

// export default Slider;
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;