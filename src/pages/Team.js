import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";

//import component
import Project from "../component/Project";
import Teamcomponent from "../component/Teamcomponent";
import Line from "../component/Line";

export default function Team() {

  return (
    <React.Fragment>

      {/* team section start  */}
        <section
          className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                Team
                </h2>
                <ul className="mt-2 text-center">
                  <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                    <Link to="#">Team</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      {/* team section end  */}

       <Line />
      <Teamcomponent />
       <Line />
       <Project/>
    </React.Fragment>
    
  );
}
