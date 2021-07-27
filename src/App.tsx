import React from 'react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import './App.css'

SwiperCore.use([Navigation,Pagination,Autoplay])

function App() {
  
  return (
    <div className="App">
      <Swiper
        speed={700}
        allowTouchMove={true}
        spaceBetween={20}
        slidesPerView={1}
        autoplay
        loop
        navigation
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
        effect={'slide'}
      >
        <SwiperSlide style={{height:'100px'}}>slide 1</SwiperSlide>
        <SwiperSlide style={{height:'100px'}}>slide 2</SwiperSlide>
        <SwiperSlide style={{height:'100px'}}>slide 3</SwiperSlide>
        <SwiperSlide style={{height:'100px'}}>slide 4</SwiperSlide>
        <SwiperSlide style={{height:'100px'}}>slide 5</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
