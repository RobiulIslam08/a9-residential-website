
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

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
        modules={[Pagination, Navigation,Autoplay]}
        autoplay={
          {
            delay:2000
          }
        }
        className="mySwiper h-[200px] mt-20 md:h-[400px] lg:h-[500px]"
      >
        <SwiperSlide>
       
          <div className='relative'>
            <img className='w-full bg-cover  object-cover'
              src="
                        https://i.ibb.co/M7fDFkQ/SOHL0122005-780x440-mobile.jpg"
              loading="lazy"
            />
         
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'> single home </div>
   
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
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'>Townhouse</div>

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
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'>Apartments</div>

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
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'>Senior living community</div>

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
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-lg lg:text-3xl'>Vacation Reentals</div>

          </div>
          <h1 className='text-4xl text-blue-600'>how is positble</h1>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

      </Swiper>

    </>
  );
};

export default Slider;
