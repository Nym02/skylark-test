import React, { useEffect, useState } from "react";
import logo from "./../../../assets/img/logo.svg";

const StickyNav = () => {
    const [showNav, setShowNav] = useState(false);
    const [yOffset, setYOffset] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const handleScroll = () => {
        const currentYOffset = window.pageYOffset;
        let visible = false;
        if(yOffset <= 80){

        } else {

            visible = yOffset > currentYOffset;
        }

    console.log({currentYOffset, yOffset});
    setYOffset(currentYOffset);
    setVisible(visible);
    }
  return (
    <div className="sticky-nav-wrap">
      <div className={`sticky-nav ${visible ? 'active' : 'hidden'}`}>
        <div className="sticky-nav-logo-wrap">
          <img src={logo} alt="" />
        </div>
        <div onClick={() => setShowNav(!showNav)} className="sticky-nav-hamburger-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {
            showNav && <><div className="sticky-nav-content">
            <div className="sticky-nav-content-wrap">
            <ul className="sticky-nav-content-items">
              <li>
                <a href="#">Who We Are</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a href="#">Who We Do</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a href="#">Sectors</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a href="#">Transactions</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
            </ul>
            <ul className="sticky-nav-content-items">
              <li>
                <a href="#">Our People</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a href="#">Global Reach</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a href="#">Newsletter</a>{" "}
                <span>
                  
                </span>
              </li>
              <li>
                <a href="#">Contact Us</a>{" "}
                <span>
                  
                </span>
              </li>
            </ul>
            <ul className="sticky-nav-content-items">
              <li>
                <a href="#">Careers</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a href="#">Working With Us</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <a href="#">Privacy</a>{" "}
                <span>
                  <svg
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0629883 6.61264H12.4972L8.38273 10.4681L9.30723 11.3344L15 5.99999L9.30723 0.665619L8.38273 1.53191L12.4972 5.38733H0.0629883V6.61264Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
            </ul>
            </div>
          </div></>
        }
     
      </div>
    </div>
  );
};

export default StickyNav;
