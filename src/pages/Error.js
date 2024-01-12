import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import error from "../assets/images/error.png";

//import component
import Project from "../component/Project";
import Line from "../component/Line";


export default function Error() {

  return (

    <React.Fragment>

      {/* Error Section Start */}
        <section
          className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                  Error
                </h2>
                <ul className="mt-2 text-center">
                  <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                    <Link to="#">Error</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      {/* Error Section End */}

      <Line />

      {/* Page Not Found Start */}
        <section className="md:py-[120px] py-20">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="max-w-[752px] mx-auto w-full">
                <img src={error} alt="" />
                <div className="text-center mt-16">
                  <h3 className="font-semibold text-4xl leading-snug md:text-5xl md:leading-[62px]">
                    Page not found
                  </h3>
                  <p className="text-[15px] leading-7 max-w-[558px] mx-auto mt-8 text-dark-light">
                    Uh oh, we can't seem to find the page you are looking for. Try
                    going back or see our&nbsp;
                    <a href="/#" className="text-dark font-medium">
                      Help Center
                    </a>&nbsp;
                    for more information
                  </p>
                  <div className="md:mt-12 mt-8">
                    <Link to ="/index" className="btn-green">
                      Back to home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Page Not Found End */}

      <Line />
      <Project/>
    </React.Fragment>
    
  );
}
