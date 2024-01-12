// import "./assets/css/style.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from './AppRouter';
import routedata from './Route.json';
import Header  from "./component/Header";
import Footer from "./component/Footer";
import Livepreview from "./pages/Livepreview";
import "../src/assets/css/index.css";
 

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
        {routedata.routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={
          route.element === 'Livepreview' 
            ? <Livepreview /> 
            : (
              <>
                <Header />
                {AppRouter(route.element)}
                <Footer />
              </>
            )
        }
      />
    ))}
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
