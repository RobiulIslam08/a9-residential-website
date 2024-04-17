
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[200px] z-10 mt-20 md:h-[400px] lg:h-[500px]"
      >
        <SwiperSlide>
          <div className='relative'>
            <img className='w-full bg-cover  object-cover'
              src="
                        https://i.ibb.co/M7fDFkQ/SOHL0122005-780x440-mobile.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full  object-cover'
              src="https://i.ibb.co/Jdgs6Fj/kda-townhouses.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full bg-cover  object-cover'
              src="https://i.ibb.co/z6Bf5my/apartments.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full bg-cover  object-cover'
              src="https://i.ibb.co/zJGvT8P/senior-living-community.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'> 
            <img
              className='w-full  object-cover'
              src="https://i.ibb.co/ctgySqc/vacation-rentals.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

          </div>
          <h1 className='text-4xl text-blue-600'>how is positble</h1>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

      </Swiper>

    </>
  );
};

export default Slider;
