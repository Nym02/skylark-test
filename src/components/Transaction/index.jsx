import React from "react";
import Button from "../Button";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import img1 from "./../../assets/img/transaction1.png";
import img2 from "./../../assets/img/transaction2.png";
import img3 from "./../../assets/img/transaction3.png";

const Transaction = () => {
  return (
    <div className="skylark-transaction-main-wrapper">
      <div className="skylark-transaction-header">
        <div className="skylark-transaction-header-title">
          <h1>Transactions</h1>
        </div>
        <div className="skylark-transaction-header-btn">
          <Button
            text="view all transactions"
            className={"btn-primary btn-primary-mod"}
          />
        </div>
      </div>
      <div className="transaction-slider">
        <Swiper slidesPerView={3} loop={true} spaceBetween={30} modules={[Pagination, Scrollbar, Navigation]}  navigation={true}  scrollbar={true} breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}className="mySwiper">
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
         
        
        </Swiper>
      </div>
    </div>
  );
};

export default Transaction;
