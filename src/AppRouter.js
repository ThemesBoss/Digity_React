import React from 'react'; 

// Import your route components
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Blogdetails from "./pages/Blogdetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Faqs from "./pages/Faqs";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Teamdetails from "./pages/Teamdetails";
import Utility from "./pages/Utility";
import Work from "./pages/Work";
import Workdetail from "./pages/Workdetail";
import Livepreview from "./pages/Livepreview";

        // Helper function to map component names to actual components
         function AppRouter(componentName) { 

            switch (componentName){

                case 'Index':
                    return <Index/>; 
                case 'About': 
                    return <About/>; 
                case 'Blog': 
                    return <Blog/>;
                case 'Blogdetails': 
                    return <Blogdetails/>;
                case 'Contact': 
                    return <Contact/>;
                case 'Error': 
                    return <Error/>;
                case 'Faqs': 
                    return <Faqs/>;
                case 'Pricing': 
                    return <Pricing/>;
                case 'Services': 
                    return <Services/>;
                case 'Team': 
                    return <Team/>;
                case 'Teamdetails': 
                    return <Teamdetails/>;
                case 'Utility': 
                    return <Utility/>;
                case 'Work': 
                    return <Work/>;
                case 'Workdetail': 
                    return <Workdetail/>;
                case 'Livepreview': 
                    return <Livepreview/>;
                default: 
                    return null; 
            }
        } 
         export default AppRouter; 