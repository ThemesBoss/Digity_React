import { useEffect, useState } from "react";
import React from "react";
import logodark from "../assets/images/logo-dark.svg";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Header() {

  const location = useLocation();
  
  // Scroll restoration logic
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //navbar Start
  const [sticky, setSticky] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const stickyclassName = `fixed-top d-xl-block ${sticky}`;

  //sticky nav Start
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const stickyClassName =
      scrollTop >= 200 ? "md-sticky-top bg-white stickyadd" : "";
    setSticky(stickyClassName);
  };
   //sticky nav End
   const handleMenuClose = () => {
    setMenuOpen(false);
  };
   //Toggle menu start
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }
  //Toggle menu close
 
  //page scroll start
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //page scroll end
  //navbar End
 
  return (

    <React.Fragment> 

    {/* Header Start */}
      <header className="main-menu">
        <nav className={`fixed top-0 w-full z-50 mobile-menu-bg   p-0 ${stickyclassName}`}>
          <div className="container">
            <div className="lg:flex items-center justify-between gap-6">
              <div className="flex items-center justify-between">
                <Link to="/index">
                  <img src={logodark} className="" alt="logo" />
                </Link>
                <button
                  className={`text-end mobile-menu-button lg:hidden `}
                  onClick={handleMenuToggle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="navbarNav"
                className={` collapsed mobile-menu  ${menuOpen ? 'block' : 'hidden'} lg:block `} 
              > 
                <ul className="lg:space-x-8 space-y-4 lg:space-y-0 lg:flex items-center mt-6 lg:mt-0 max-[1024px]:max-h-80 max-[1024px]:overflow-scroll">
                  <li className="nav-active">
                    <Link to="/index"
                      className="uppercase text-sm font-medium lg:py-9 tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative group">
                    <Link to="#/"
                      className="uppercase text-sm font-medium lg:py-9 tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300"
                    >
                      Pages
                      <span className="ml-1.5">
                        <svg
                          width={8}
                          height={6}
                          className="inline-block"
                          viewBox="0 0 8 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.0466659 0.744778L3.86978 5.53751C3.93301 5.61663 4.06672 5.61663 4.12995 5.53751L7.95348 0.744445C7.99899 0.68712 8.01247 0.601674 7.98793 0.527294C7.98285 0.511735 7.97719 0.499838 7.97245 0.490935C7.94325 0.436855 7.88717 0.403076 7.8256 0.403076H0.174128C0.112893 0.403076 0.0564835 0.436772 0.02753 0.490935C0.0226212 0.500004 0.0169636 0.511985 0.0122212 0.526378C-0.0124892 0.601674 0.000906017 0.687287 0.0466659 0.744778Z"
                            fill="#272727"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <Link to= "/about"
                            className="uppercase text-sm font-medium tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="/faqs"
                            className="uppercase text-sm font-medium tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                          >
                            Faqs
                          </Link>
                        </li>
                        <li>
                          <Link to="/services"
                            className="uppercase text-sm font-medium tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                          >
                            Service
                          </Link>
                        </li>
                        <li>
                          <Link to="/utility"
                            className="uppercase text-sm font-medium tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                          >
                            Utility
                          </Link>
                        </li>
                        <li>
                          <Link to="/pricing"
                            className="uppercase text-sm font-medium tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link to="/error"
                            className="uppercase text-sm font-medium tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                          >
                            Error
                          </Link>
                        </li>
                        <li>
                          <Link to="/team"
                            className="uppercase text-sm font-medium tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                          >
                            Team
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/work"
                      className="uppercase text-sm font-medium lg:py-9 tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog"
                      className="uppercase text-sm font-medium lg:py-9 tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact"
                      className="uppercase text-sm font-medium lg:py-9 tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300" onClick={handleMenuClose}
                    >
                      Contact
                    </Link>
                  </li>
                  <Link to="/contact"
                    className="btn-blue navbar-btn lg:!ml-16"
                  >
                    Start a project
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    {/* Header End */}
    
    </React.Fragment>

  )
}
