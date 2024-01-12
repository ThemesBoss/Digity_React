import React from 'react'
import { useEffect } from 'react';
// import Header from '../component/Header';
// import Footer  from '../component/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {

  const location = useLocation();
  
  // Scroll restoration logic
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (

    <>
      {/* <Header /> */}
        <Outlet/>
        {/* <Footer /> */}
    </>
    
  )
}
