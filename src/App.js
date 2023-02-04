// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';

// images
import emoji1 from './images/emoji1.png';
import emoji2 from './images/emoji2.png';
import emoji3 from './images/emoji3.png';
import emoji4 from './images/emoji4.png';
import emoji5 from './images/emoji5.png';
import emoji6 from './images/emoji6.png';

// use swiper keybpard
SwiperCore.use([Keyboard]);

function App() {
  return (
    <div className="wrapper">
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        loop
        keyboard
        className='swiper'
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
        }}
      >

        <SwiperSlide className='slides'>
          <img src={emoji1} alt="emoji"/>
        </SwiperSlide>

        <SwiperSlide className='slides'>
          <img src={emoji2} alt="emoji"/>
        </SwiperSlide>

        <SwiperSlide className='slides'>
          <img src={emoji3} alt="emoji"/>
        </SwiperSlide>

        <SwiperSlide className='slides'>
          <img src={emoji4} alt="emoji"/>
        </SwiperSlide>

        <SwiperSlide className='slides'>
          <img src={emoji5} alt="emoji"/>
        </SwiperSlide>

        <SwiperSlide className='slides'>
          <img src={emoji6} alt="emoji"/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default App;
