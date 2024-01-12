import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import about from "../assets/images/about-img.jpg";
import getin from "../assets/images/getin.png";

//import component
import Getintouch from "../component/Getintouch";
import Client from "../component/Client";
import Project from "../component/Project";
import Line from "../component/Line";
import Teamcomponent from "../component/Teamcomponent";

//import countup
import CountUp from "react-countup";

//import css
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

export default function About() {
  //count up Start
  const [startCounter, setStartCounter] = useState(false);
  useEffect(() => {
    const isInViewport = (el) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    const startCountAnimation = () => {
      if (isInViewport(document.getElementById("counter")) && !startCounter) {
        setStartCounter(true);
      }
    };
    window.addEventListener("scroll", startCountAnimation);
    return () => {
      window.removeEventListener("scroll", startCountAnimation);
    };
  }, [startCounter]);
  //count up End

  //state for video open 
  const [isOpen, setOpen] = useState(false);  

  return (

    <React.Fragment>
      
      {/* About Section Start */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                About
              </h2>
              <ul className="mt-2 text-center">
                <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                  <Link to="/index">Home</Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link to="#">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      <Line />

      {/* Overview Section Start */}
      <section className="md:py-[120px] py-20">
        {/* video open Start */}
        <div>
          <ModalVideo
            channel="youtube"
            youtube={{
              mute: 1,
              autoplay: true,
              controls: 0,
              loop: true,
              modestbranding: 1,
              title: false,
              portrait: true,
              allowFullScreen: true,
            }}
            isOpen={isOpen}
            videoId="kTdAs3p6Alg"
            onClose={() => setOpen(false)}
          />
        </div>
        {/* video open End */}

        <div className="container">
          <div className="grid grid-cols-1" id="counter">
            <div className="max-w-[946px] text-center mx-auto">
              <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                Overview
              </p>
              <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px]">
                We are a team of great designers, problem solvers, and
                passionate collaborators
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-12">
            <div className="text-center">
              <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-16 justify-end max-w-sm mx-auto">
                <div className="flex items-center text-left gap-4">
                  <h2 className="text-[56px] leading-[72px] font-semibold text-green">

                    {/* Countup Start */}
                      {startCounter && (
                      <CountUp
                        start={0}
                        end={13}
                        delay={1}
                        time={3000}
                        format="{}"
                        useEasing={true}
                        useGrouping={true}
                      />
                      )}
                    {/* Countup End */}

                  </h2>
                  <p className="md:text-[15px] md:leading-[22px] text-lg">
                    Years in business
                  </p>
                </div>
                <div className="flex items-center text-left gap-4">
                  <h2 className="text-[56px] leading-[72px] font-semibold text-green">
                    
                    {/* Countup Start */}
                      {startCounter && (
                      <CountUp
                        start={0}
                        end={28}
                        delay={1}
                        time={3000}
                        format="{}"
                        useEasing={true}
                        useGrouping={true}
                      />
                      )}
                    {/* Countup End */}

                  </h2>
                  <p className="md:text-[15px] md:leading-[22px] text-lg">
                    Designers &amp; developers
                  </p>
                </div>
              </div>
            </div>
            <div className="md:mt-[120px] mt-12 relative">
              <img src={about} className="rounded-2xl" alt="" />
              <div className="text-center w-20 h-20 md:w-32 md:h-32 mx-auto absolute top-1/2 -translate-y-1/2 inset-0">
                <a
                  href="#/"
                  data-type="youtube"
                  data-id="YjhrligRTbE"
                  className="lightbox bg-green rounded-full w-20 h-20 md:w-32 md:h-32 flex items-center justify-center"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    width={12}
                    height={16}
                    className="shrink-0"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.49004 15.9064L11.0755 8.26019C11.2337 8.13373 11.2337 7.86632 11.0755 7.73986L1.48938 0.0927906C1.37473 0.00176999 1.20384 -0.0251866 1.05507 0.023901C1.02396 0.0340519 1.00016 0.0453672 0.982358 0.0548525C0.874198 0.113258 0.80664 0.225412 0.80664 0.348548L0.806641 15.6515C0.806641 15.774 0.874032 15.8868 0.982359 15.9447C1.0005 15.9545 1.02446 15.9658 1.05325 15.9753C1.20384 16.0247 1.37506 15.9979 1.49004 15.9064Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Overview Section End */}

      <Line />
      <Teamcomponent />
      <Line />

      {/* Skills Section Start */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="lg:max-w-[461px]">
                <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                  Skills
                </p>
                <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
                  Our super skills for your project
                </h2>
                <div className="mt-12 space-y-6">
                  <div>
                    <p className="text-[15px] leading-[22px] font-medium">
                      Branding
                    </p>
                    <div className="relative h-1 w-full mt-4 rounded-2xl">
                      <div className="bg-green absolute block top-0 left-0 h-full w-[80%] rounded-2xl">
                        <span className="text-green absolute -right-4 bottom-full mb-4 text-[15px] leading-[22px] font-medium">
                          80%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[15px] leading-[22px] font-medium">
                      Development
                    </p>
                    <div className="relative h-1 w-full mt-4 rounded-2xl">
                      <div className="bg-green absolute block top-0 left-0 h-full w-[94%] rounded-2xl">
                        <span className="text-green absolute -right-4 bottom-full mb-4 text-[15px] leading-[22px] font-medium">
                          94%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[15px] leading-[22px] font-medium">
                      Design
                    </p>
                    <div className="relative h-1 w-full mt-4 rounded-2xl">
                      <div className="bg-green absolute block top-0 left-0 h-full w-[76%] rounded-2xl">
                        <span className="text-green absolute -right-4 bottom-full mb-4 text-[15px] leading-[22px] font-medium">
                          76%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={getin} className="rounded-full" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section End */}

      <Line />
      <Getintouch />
      <Line />
      <Client />
      <Line />
      <Project />
    </React.Fragment>
  );
}
