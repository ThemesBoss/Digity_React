import React from "react";
import { Link } from "react-router-dom";

//import images
import bg from "../assets/images/header-bg.png";
import blog1 from "../assets/images/blog/1.jpg";
import blog2 from "../assets/images/blog/2.jpg";
import blog3 from "../assets/images/blog/3.jpg";
import blog4 from "../assets/images/blog/4.jpg";
import blog5 from "../assets/images/blog/5.jpg";
import blog6 from "../assets/images/blog/6.jpg";

//import component
import Project from "../component/Project";
import Line from "../component/Line";

//blogdata Start
const blogData = [
  {
    id: 1,
    date: "April 17, 2022",
    title: "How to bring Cosa to your company",
    category: "Development",
    imageSrc: blog1,
  },
  {
    id: 2,
    date: "April 17, 2022",
    title: "How to bring Cosa to your company",
    category: "Development",
    imageSrc: blog2,
  },
  {
    id: 3,
    date: "January 9, 2022",
    title: "Curating a workplace that inspires",
    category: "Design",
    imageSrc: blog4,
  },
  {
    id: 4,
    date: "June 16, 2022",
    title: "Designers who changed the webflow",
    category: "Design",
    imageSrc: blog3,
  },
  {
    id: 5,
    date: "March 12, 2022",
    title: "How to win new clients in development",
    category: "Development",
    imageSrc: blog5,
  },
  {
    id: 6,
    date: "February 28, 2022",
    title: "Why we switched to Figma",
    category: "Development",
    imageSrc: blog6,
  },
];
//blogdata End

export default function Blog() {
  
  return (

    <React.Fragment>

      {/* Blog section Start */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <h2 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]">
                Blog
              </h2>
              <ul className="mt-2 text-center">
                <li className="hover:text-green inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:text-green after:mx-1.5 after:top-[2px] after:relative after:content-['/']">
                  <Link to ="/Index">Home</Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link to ="#">blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Blog section End */}

      <Line />

      {/* Blog Details Start */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white md:flex items-center rounded-2xl overflow-hidden"
              >
                <img
                  src={blog.imageSrc}
                  className="max-h-[350px] md:max-w-[220px] md:h-full md:object-cover"
                  alt=""
                />
                <div className="p-8 flex-1">
                  <p className="font-medium text-sm text-dark-semilight tracking-[0.86px] uppercase">
                    {blog.date}
                  </p>
                  <h4 className="mt-4 text-[22px] leading-[34px] font-semibold hover:text-green duration-300">
                    <Link to="/Blogdetails">{blog.title}</Link>
                  </h4>
                  <p className="mt-4 text-dark-light leading-7 text-[15px]">
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris
                  </p>
                  <Link
                    to="/Blogdetails"
                    className="text-green mt-16 inline-block uppercase font-medium tracking-[0.86px]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Details End */}

      <Line />
      <Project />
    </React.Fragment>
    
  );
}
