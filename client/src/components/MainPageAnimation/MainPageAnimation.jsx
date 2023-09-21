import React, { useEffect } from "react";
import './MainPageAnimation.css'
import { useInView } from 'react-intersection-observer';
import { useState } from "react";
const MainPageAnimation = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [ref, inView] = useInView({
      threshold: 0.5, // Adjust the threshold as needed
    });

    useEffect(()=>{
        setIsIntersecting(inView)
    },[inView])
  

  
    return (
      <div
      id="mainPageAnimation-section"
        className=""
        ref={ref}
      >
        <div className="mainPageAnimation-content">
          <p>This is the content of the section</p>
        </div>
      </div>
    );
  }

export default MainPageAnimation;
