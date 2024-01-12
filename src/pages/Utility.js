import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import checked from "../assets/images/checked.svg";

//import component
import Line from "../component/Line";
import Project from "../component/Project";

export default function Utility() {

  return (

    <React.Fragment>

      {/* Utility section Start */}
        <section
          className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                  Utility
                </h2>
                <ul className="mt-2 text-center">
                  <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                    <Link to="#">Utility</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      {/* Utility section End */}

      <Line />

      {/* terms & condtion Start */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="max-w-[752px] mx-auto w-full">
              <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                Last updated: 10/02/2020
              </p>
              <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
                Terms &amp; Condition
              </h2>
              <div className="mt-12 space-y-6">
                <p className="text-dark-light text-[15px] leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet
                </p>
                <p className="text-dark-light text-[15px] leading-7">
                  Cras id dui. classNameaptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos hymenaeos. Vivamus laoreet.
                  Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit
                  viverra. Nullam dictum felis eu pede mollis pretium. Curabitur
                  vestibulum aliquam leo. Sed libero. Praesent metus tellus,
                  elementum eu, semper a, adipiscing nec
                </p>
                <p className="text-dark-light text-[15px] leading-7">
                  Vestibulum ullamcorper mauris at ligula. Phasellus
                  consectetuer vestibulum elit. Sed a libero. Vivamus
                  consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis
                  natoque penatibus
                </p>
              </div>
              <div className="mt-12 space-y-2">
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
              <div className="mt-12 space-y-6">
                <p className="text-dark-light text-[15px] leading-7">
                  Cras id dui. classNameaptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos hymenaeos. Vivamus laoreet.
                  Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit
                  viverra. Nullam dictum felis eu pede mollis pretium. Curabitur
                  vestibulum
                </p>
                <p className="text-dark-light text-[15px] leading-7">
                  Praesent ac sem eget est egestas volutpat. Aenean tellus
                  metus, bibendum sed, posuere ac, mattis non, nunc. Curabitur
                  suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus
                  pulvinar, hendrerit id, lorem. Etiam rhoncus.Sed magna purus,
                  fermentum eu, tincidunt eu, varius ut, felis. Pellentesque
                  egestas, neque sit amet convallis pulvinar, justo nulla
                  eleifend augue, ac auctor orci leo non est. Vestibulum purus
                  quam, scelerisque ut, mollis sed, nonummy id, metus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* terms & condtion End */}

      <Line />
      <Project />
    </React.Fragment>
    
  );
}
