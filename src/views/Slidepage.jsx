import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import '../style/Style.css';

export default function Slidepage() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className=" w-[13.5rem] right-3 md:w-[480px] mx-10 text-center lg:max-w-lg xl:max-w-xl "
      >
        <SwiperSlide><img src="https://i.pinimg.com/564x/6b/29/2c/6b292caa47ff8be9574c948d45f46049.jpg" alt="" className='bg-cover bg-center object-contain' /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/man-collecting-scattered-plastic-bottles-from-ground_1268-20043.jpg?t=st=1719432583~exp=1719436183~hmac=03616284bee83a2aa50450948c25b1c4e02fc382979591df80f37d93fd2f89e6&w=826" className='bg-cover bg-center object-contain' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-photo/cute-cat-sitting-rubbish-bin-outdoors_23-2148666769.jpg?t=st=1719432991~exp=1719436591~hmac=7cd471fc2878774f8b2c35d90c9d0ec0c7f3b4cdaf8b3ae16dc815246524eaed&w=740" className='bg-cover bg-center object-contain' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/564x/82/19/5d/82195d04ee489ab3fdda51609055b34f.jpg" className='bg-cover bg-center object-contain' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/564x/ea/e6/d9/eae6d99cea8f11afee15aaaef2f6d45e.jpg" className='bg-cover bg-center object-contain' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/564x/c5/64/d0/c564d02eddd62d3099d1438eb221f676.jpg" className='bg-cover bg-center object-contain' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://santeenafrique.com/wp-content/uploads/2021/11/phpVcWd63.jpg" className='bg-center bg-cover object-contain' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
