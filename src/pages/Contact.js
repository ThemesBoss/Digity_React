import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import map from "../assets/images/map.png";

//import component
import Project from "../component/Project";
import Line from "../component/Line";

export default function Contact() {
  
  return (

    <React.Fragment>

      {/* Contact Section Start */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                Contact
              </h2>
              <ul className="mt-2 text-center">
                <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                  <Link to ="/index">Home
                  </Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      <Line />

      {/* Address section start */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <img src={map} className="rounded-full" alt="" />
            </div>
            <div>
              <div className="lg:max-w-[461px] lg:ml-auto">
                <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                  Find us
                </p>
                <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
                  We'd love to hear from you
                </h2>
                <p className="md:mt-8 mt-4 text-[#7B7B7B] text-[15px] leading-7 max-w-[200px]">
                  Greenwich Village &amp; Soho, 10012 New York, USA
                </p>
                <p className="mt-6 text-[#7B7B7B] text-[15px] leading-7">
                  800 123-456
                </p>
                <p className="text-[15px] leading-7 text-[#7B7B7B]">
                  digity@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Address section End */}

      <Line />

      {/* Send Message Start */}
        <section className="md:py-[120px] py-20">
            <div className="container">
              <div className="grid grid-cols-1">
                <div className="max-w-[500px] text-center mx-auto">
                  <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                    Stay in Touch
                  </p>
                  <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] p-0">
                    Send us a message
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-12">
                <form className="max-w-[752px] w-full mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Enter your name"
                        id="one"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="Enter your email"
                        id="two"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Type your subject"
                        id="three"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <textarea
                        rows={5}
                        className="form-input"
                        placeholder="Write your message"
                        spellCheck="false"
                        defaultValue={""}
                        id="four"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <input
                        type="button"
                        className="btn-green w-full"
                        defaultValue="Submit comment"
                        id="five"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </section>
      {/* Send Message End */}

      <Line />
      <Project />
    </React.Fragment>

  );
}
