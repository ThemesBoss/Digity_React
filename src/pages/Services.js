import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import insta from "../assets/images/instagram.png";
import develop from "../assets/images/web-development.png";
import brand from "../assets/images/graphic-designer.png";
import instagram from "../assets/images/instagram.svg";
import development from "../assets/images/web-development.svg";
import branding from "../assets/images/graphic-designer.svg";

//import component
import Project from "../component/Project";
import Line from "../component/Line";


export default function Services() {

  return (
    
    <React.Fragment>

      {/* Services section start */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                Service
              </h2>
              <ul className="mt-2 text-center">
                <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                  <Link to ="/index">Home</Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link to="#">Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Services section End */}

      <Line />

      {/* Services Details Start  */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative">
              <div className="hidden md:block border-light border-l absolute h-full left-1/2 transform -translate-x-1/2" />
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:block hidden">
                      <img src={instagram} className="mx-auto" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 lg:pl-[110px]">
                      <div className="bg-white p-8 rounded-2xl relative z-10">
                        <div className="md:hidden block">
                          <img src={insta} alt="" />
                        </div>
                        <h5 className="font-semibold text-[22px] leading-[33px] mt-7 md:mt-0">
                          Branding
                        </h5>
                        <p className="text-[15px] leading-7 text-dark-light mt-4">
                          Eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis laboris nisi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 md:block hidden">
                    <div className="bg-green w-4 h-4 rounded-full" />
                    <span className="h-px w-[93px] absolute inline-block bg-light -z-20 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-[120px] relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pr-8 lg:pr-[110px]">
                      <div className="bg-white p-8 rounded-2xl relative z-10">
                        <div className="md:hidden block">
                          <img src={development} alt="" />
                        </div>
                        <h5 className="font-semibold text-[22px] leading-[33px] mt-7 md:mt-0">
                          Development
                        </h5>
                        <p className="text-[15px] leading-7 text-dark-light mt-4">
                          Eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis laboris nisi
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-8 lg:pr-[110px] md:block hidden">
                      <img src={develop} className="mx-auto" alt="" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 md:block hidden">
                    <div className="bg-green w-4 h-4 rounded-full" />
                    <span className="h-px w-[93px] absolute inline-block bg-light right-0 -z-20 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-[120px] relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:block hidden">
                      <img src={branding} className="mx-auto" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 lg:pl-[110px]">
                      <div className="bg-white p-8 rounded-2xl relative z-10">
                        <div className="md:hidden block">
                          <img src={brand} alt="" />
                        </div>
                        <h5 className="font-semibold text-[22px] leading-[33px] mt-7 md:mt-0">
                          Design
                        </h5>
                        <p className="text-[15px] leading-7 text-dark-light mt-4">
                          Eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis laboris nisi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 md:block hidden">
                    <div className="bg-green w-4 h-4 rounded-full" />
                    <span className="h-px w-[93px] absolute inline-block bg-light -z-20 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link to ="/work" className="btn-green">
                View all project
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Details End  */}

      <Line />
      <Project />
    </React.Fragment>
    
  );
}
