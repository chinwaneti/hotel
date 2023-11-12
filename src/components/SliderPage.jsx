
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SliderPage = () => {
    return (
        <div className='relative text-white md:px-20 md:py-0  md:mt-0 mt-[20%] '>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src="https://www.wakamerestaurant.com/resourcefiles/homeimages/inside.jpg" alt="imag"  className=''/><div  className='font-extrabold md:text-5xl  text-3xl md:w-[35%] w-[50%] text-left absolute bottom-14 left-12'>Welcome to Chidinma</div></SwiperSlide>
        <SwiperSlide><img src="https://www.wakamerestaurant.com/resourcefiles/homeimages/wakame-restaurant.jpg" alt="imag" className=''/><div  className='font-extrabold md:text-5xl  text-3xl md:w-[35%] w-[50%] text-left absolute bottom-14 left-12'>Welcome to a taste of Africa</div></SwiperSlide>
       
      </Swiper></div>
    );
  };
  
  export default SliderPage;
  