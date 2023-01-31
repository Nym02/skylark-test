import React from "react";
import * as ReactDOMServer from "react-dom/server";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {

    const page = [
        "about us", "our team", "where we are", "contact us"
    ]
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        console.log(page)
      return `<div class="${className}">${page[index]} </div>`;
    },
    
  };
  return (
    <>
      <Swiper
      slidePerView={1}
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="skylark-slider-main-wrapper">
            <div className="skylark-slider-main">
              <p className="skylark-slider-main-breadcrumb">About Us</p>
              <h2 className="skylark-slider-main-header">
                Skylark is a dolor sit amet <br /> consectetur. Sem at <br />{" "}
                pellentesque in tellus. Eu nibh <br /> dolor erat egestas.
                Malesuada.
              </h2>
              <p className="skylark-slider-main-desc">
                Lorem ipsum dolor sit amet consectetur. In enim aliquam
                porttitor. Condimentum amet consectetur egestas vel libero
                varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean
                gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <div className="skylark-slider-main-btn-wrap">
                <div className="learn-more-icon">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.5907" r="12" fill="#DAAA00" />
                    <path
                      d="M12.0631 8.61276L16.8231 12.3215C16.8662 12.355 16.9007 12.3965 16.9244 12.443C16.9481 12.4896 16.9603 12.5402 16.9603 12.5914C16.9603 12.6425 16.9481 12.6931 16.9244 12.7397C16.9007 12.7862 16.8662 12.8277 16.8231 12.8612L12.0631 16.5688C12.0488 16.58 12.0311 16.5873 12.0123 16.5898C11.9935 16.5922 11.9743 16.5898 11.957 16.5827C11.9397 16.5757 11.925 16.5643 11.9147 16.5499C11.9044 16.5356 11.8989 16.5189 11.8988 16.5018L11.8988 15.5967C11.8988 15.5453 11.9237 15.4961 11.9673 15.4615L15.107 13.0154L8.09957 13.0154C8.04481 13.0154 8.00001 12.9752 8.00001 12.926L8.00001 12.2556C8.00001 12.2064 8.04481 12.1662 8.09957 12.1662L15.107 12.1662L11.9673 9.72013C11.9237 9.6866 11.8988 9.63744 11.8988 9.58492L11.8988 8.6798C11.8988 8.60382 11.9984 8.56247 12.0631 8.61276Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="learn-more-icon-item">
                    <a href="#">learn more</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skylark-slider-main-wrapper">
            <div className="skylark-slider-main">
              <p className="skylark-slider-main-breadcrumb">About Us</p>
              <h2 className="skylark-slider-main-header">
                Skylark is a dolor sit amet <br /> consectetur. Sem at <br />{" "}
                pellentesque in tellus. Eu nibh <br /> dolor erat egestas.
                Malesuada.
              </h2>
              <p className="skylark-slider-main-desc">
                Lorem ipsum dolor sit amet consectetur. In enim aliquam
                porttitor. Condimentum amet consectetur egestas vel libero
                varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean
                gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <div className="skylark-slider-main-btn-wrap">
                <div className="learn-more-icon">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.5907" r="12" fill="#DAAA00" />
                    <path
                      d="M12.0631 8.61276L16.8231 12.3215C16.8662 12.355 16.9007 12.3965 16.9244 12.443C16.9481 12.4896 16.9603 12.5402 16.9603 12.5914C16.9603 12.6425 16.9481 12.6931 16.9244 12.7397C16.9007 12.7862 16.8662 12.8277 16.8231 12.8612L12.0631 16.5688C12.0488 16.58 12.0311 16.5873 12.0123 16.5898C11.9935 16.5922 11.9743 16.5898 11.957 16.5827C11.9397 16.5757 11.925 16.5643 11.9147 16.5499C11.9044 16.5356 11.8989 16.5189 11.8988 16.5018L11.8988 15.5967C11.8988 15.5453 11.9237 15.4961 11.9673 15.4615L15.107 13.0154L8.09957 13.0154C8.04481 13.0154 8.00001 12.9752 8.00001 12.926L8.00001 12.2556C8.00001 12.2064 8.04481 12.1662 8.09957 12.1662L15.107 12.1662L11.9673 9.72013C11.9237 9.6866 11.8988 9.63744 11.8988 9.58492L11.8988 8.6798C11.8988 8.60382 11.9984 8.56247 12.0631 8.61276Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="learn-more-icon-item">
                    <a href="#">learn more</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skylark-slider-main-wrapper">
            <div className="skylark-slider-main">
              <p className="skylark-slider-main-breadcrumb">About Us</p>
              <h2 className="skylark-slider-main-header">
                Skylark is a dolor sit amet <br /> consectetur. Sem at <br />{" "}
                pellentesque in tellus. Eu nibh <br /> dolor erat egestas.
                Malesuada.
              </h2>
              <p className="skylark-slider-main-desc">
                Lorem ipsum dolor sit amet consectetur. In enim aliquam
                porttitor. Condimentum amet consectetur egestas vel libero
                varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean
                gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <div className="skylark-slider-main-btn-wrap">
                <div className="learn-more-icon">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.5907" r="12" fill="#DAAA00" />
                    <path
                      d="M12.0631 8.61276L16.8231 12.3215C16.8662 12.355 16.9007 12.3965 16.9244 12.443C16.9481 12.4896 16.9603 12.5402 16.9603 12.5914C16.9603 12.6425 16.9481 12.6931 16.9244 12.7397C16.9007 12.7862 16.8662 12.8277 16.8231 12.8612L12.0631 16.5688C12.0488 16.58 12.0311 16.5873 12.0123 16.5898C11.9935 16.5922 11.9743 16.5898 11.957 16.5827C11.9397 16.5757 11.925 16.5643 11.9147 16.5499C11.9044 16.5356 11.8989 16.5189 11.8988 16.5018L11.8988 15.5967C11.8988 15.5453 11.9237 15.4961 11.9673 15.4615L15.107 13.0154L8.09957 13.0154C8.04481 13.0154 8.00001 12.9752 8.00001 12.926L8.00001 12.2556C8.00001 12.2064 8.04481 12.1662 8.09957 12.1662L15.107 12.1662L11.9673 9.72013C11.9237 9.6866 11.8988 9.63744 11.8988 9.58492L11.8988 8.6798C11.8988 8.60382 11.9984 8.56247 12.0631 8.61276Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="learn-more-icon-item">
                    <a href="#">learn more</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="skylark-slider-main-wrapper">
            <div className="skylark-slider-main">
              <p className="skylark-slider-main-breadcrumb">About Us</p>
              <h2 className="skylark-slider-main-header">
                Skylark is a dolor sit amet <br /> consectetur. Sem at <br />{" "}
                pellentesque in tellus. Eu nibh <br /> dolor erat egestas.
                Malesuada.
              </h2>
              <p className="skylark-slider-main-desc">
                Lorem ipsum dolor sit amet consectetur. In enim aliquam
                porttitor. Condimentum amet consectetur egestas vel libero
                varius. Feugiat magna dolor odio penatibus consequat est auctor.
                Ligula purus faucibus integer eget risus. Fermentum aenean
                gravida netus et quis quis. Elit mattis quisque sed.
              </p>
              <div className="skylark-slider-main-btn-wrap">
                <div className="learn-more-icon">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12.5907" r="12" fill="#DAAA00" />
                    <path
                      d="M12.0631 8.61276L16.8231 12.3215C16.8662 12.355 16.9007 12.3965 16.9244 12.443C16.9481 12.4896 16.9603 12.5402 16.9603 12.5914C16.9603 12.6425 16.9481 12.6931 16.9244 12.7397C16.9007 12.7862 16.8662 12.8277 16.8231 12.8612L12.0631 16.5688C12.0488 16.58 12.0311 16.5873 12.0123 16.5898C11.9935 16.5922 11.9743 16.5898 11.957 16.5827C11.9397 16.5757 11.925 16.5643 11.9147 16.5499C11.9044 16.5356 11.8989 16.5189 11.8988 16.5018L11.8988 15.5967C11.8988 15.5453 11.9237 15.4961 11.9673 15.4615L15.107 13.0154L8.09957 13.0154C8.04481 13.0154 8.00001 12.9752 8.00001 12.926L8.00001 12.2556C8.00001 12.2064 8.04481 12.1662 8.09957 12.1662L15.107 12.1662L11.9673 9.72013C11.9237 9.6866 11.8988 9.63744 11.8988 9.58492L11.8988 8.6798C11.8988 8.60382 11.9984 8.56247 12.0631 8.61276Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="learn-more-icon-item">
                    <a href="#">learn more</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};

export default Slider;
