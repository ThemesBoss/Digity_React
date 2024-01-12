import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import checked from "../assets/images/checked.svg";

//import component
import Project from "../component/Project";
import Line from "../component/Line";


export default function pricing() {

  return (

    <React.Fragment>

      {/* pricing section start  */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                Pricing
              </h2>
              <ul className="mt-2 text-center">
                <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                  <Link
                to="/index">Home</Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link to ="#">Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* pricing section End  */}

      <Line />

      {/* Annual Billing Start  */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="flex justify-center items-center">
              <span className="text-[15px] leading-[22px] text-dark-light">
                Monthly
              </span>
              <div className="mx-4">
                <label className="relative inline-block w-[58px] h-8 rounded-full">
                  <input type="checkbox" className="peer opacity-0 w-0 h-0" id="label" name="checkbox"/>
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-green-semilight rounded-full duration-300 before:content-[''] before:absolute before:w-[26px] before:h-[26px] before:bottom-[3px] before:left-[3px] before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-[26px] peer-checked:bg-green" />
                </label>
              </div>
              <span className="text-[15px] leading-[22px] text-dark">
                Annual Billing
                <span className="block text-green">Save 30%</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 mt-16">
            <div className="bg-white p-8 rounded-2xl">
              <p className="text-[22px] leading-[33px] font-semibold">
                Business
              </p>
              <h4 className="mt-4 font-semibold text-[56px] leading-[72px]">
                $41
              </h4>
              <p className="text-dark-light">Per agent per month</p>
              <div className="mt-16 space-y-2">
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">More than 100+ components </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">Five ready demos </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">Coming Soon page</span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">List with check left icon </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">And much more... </span>
                </p>
              </div>
              <div className="mt-8">
                <Link to="/#" className="btn-green w-full">
                  Buy now
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl lg:scale-110 lg:shadow-custom relative">
              <div className="absolute right-8">
                <p className="bg-[#FBF2DB] text-[#EABE4D] px-4 py-1.5 rounded-3xl inline-block font-medium text-sm">
                  Popular
                </p>
              </div>
              <p className="text-[22px] leading-[33px] font-semibold">
                Professional
              </p>
              <h4 className="mt-4 font-semibold text-[56px] leading-[72px]">
                $71
              </h4>
              <p className="text-dark-light">Per agent per month</p>
              <div className="mt-16 space-y-2">
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">More than 100+ components </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">Five ready demos </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">Coming Soon page</span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">List with check left icon </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">And much more... </span>
                </p>
              </div>
              <div className="mt-8">
                <Link to="/#" className="btn-green w-full">
                  Buy now
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <p className="text-[22px] leading-[33px] font-semibold">
                Enterprise
              </p>
              <h4 className="mt-4 font-semibold text-[56px] leading-[72px]">
                $121
              </h4>
              <p className="text-dark-light">Per agent per month</p>
              <div className="mt-16 space-y-2">
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">More than 100+ components </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">Five ready demos </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">Coming Soon page</span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">List with check left icon </span>
                </p>
                <p className="text-[15px] gap-2 leading-[22px] flex items-center">
                  <span>
                    <img
                      src={checked}
                      className="inline-block -mt-[2px]"
                      alt=""
                    />
                  </span>
                  <span className="flex-1">And much more... </span>
                </p>
              </div>
              <div className="mt-8">
                <Link to="/#" className="btn-green w-full">
                  Buy now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Annual Billing End  */}

      <Line />
      <Project/>

    </React.Fragment>
  );
}
