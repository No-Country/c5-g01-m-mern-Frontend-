import React from "react";
import images from "./images";
import './assets/styles.css';
import NavBar from "./layouts/NavBar";
import Home from "./components/Home"
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (

    <>
    <div className="App">
      
    
        <NavBar />
        <Home />
       
        
       { /*<!--<ImageSlider images={images} />--!>*/}
    </div>
    </>
    
  );
}
  
export default App;
