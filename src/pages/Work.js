import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import work1 from "../assets/images/work/1.png";
import work2 from "../assets/images/work/2.png";
import work3 from "../assets/images/work/3.png";
import work4 from "../assets/images/work/4.png";
import work5 from "../assets/images/work/5.png";
import work6 from "../assets/images/work/6.png";

//import component
import Project from "../component/Project";
import Line from "../component/Line";

//workdata Start
const workData = [
  {
    id: 1,
    title: "Powering Social Proof for Modern Business",
    category: "branding",
    image: work1,
  },
  {
    id: 2,
    title: "Bringing a modern mobile experience learning",
    category: "Development",
    image: work2,
  },
  {
    id: 3,
    title: "Design for one of the major figures of fashion",
    category: "Design",
    image: work5,
  },
];
const workDataa = [
  {
    title: "Art direction for leading publishing company",
    category: "Development",
    image: work3,
  },
  {
    title: "Helping Australia's oldest banking company",
    category: "Design",
    image: work4,
  },
  {
    title: "Improving a business through design & strategy",
    category: "Branding",
    image: work6,
  },
];
//workdata End
export default function Work() {

  return (

    <React.Fragment>

      {/* work section Start */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
              WORK
              </h2>
              <ul className="mt-2 text-center">
                <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                  <Link to="/index">Home</Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link to="#">WORK</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* work section End */}

      <Line />

      {/* workdata Start  */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-[72px]">
            <div>
              <div className="space-y-6 md:space-y-[72px]">
                {workData.map((workItem) => (
                  <div
                    key={workItem.id}
                    className="bg-white rounded-2xl overflow-hidden"
                  >
                    <Link to="/workdetail">
                      <img
                        src={workItem.image}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </Link>
                    <div className="p-8 md:max-w-[420px]">
                      <Link
                        to="/workdetail"
                        className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                      >
                        {workItem.title}
                      </Link>
                      <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                        {workItem.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 mt-6 md:mt-32 md:space-y-[72px]">
              {workDataa.map((workItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <Link to="/workdetail">
                    <img
                      src={workItem.image}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </Link>
                  <div className="p-8 md:max-w-[420px]">
                    <Link
                      to="/workdetail"
                      className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                    >
                      {workItem.title}
                    </Link>
                    <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                      {workItem.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* workdata End */}

      <Line />
      <Project />
    </React.Fragment>

  );
}
