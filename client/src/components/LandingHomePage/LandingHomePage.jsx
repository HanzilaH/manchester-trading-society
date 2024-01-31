import React, { useEffect } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import './LandingHomePage.css';

import { useState } from 'react';

function LandingHomePage() {
    const [showText, setShowText] = useState(false);


    setTimeout(() => {
        setShowText(true);
        
    }, 500);

    return (
        <div id='landing-home-page-container'>
            <div id='blue-section' className={showText ? 'expanded' : ''}>
              
              <div className='rectangle-landing-home-page'>

              </div>

                <div className={showText ? 'fade-in landing-home-page-jumbotron' : 'landing-home-page-jumbotron'}>
        <div className="row ">
          <div className="col-md-11 mx-auto">
            <div className="p-4 text-center">
              <h1 className="display-5">Manchester Trading Society</h1>
              <p className="lead">
                “Financial freedom is available to those who learn about it and
                work for it.”
              </p>
              <hr className="my-4" />
              <p>Explore a world of financial expertise.</p>
              <button
                // onClick={redirectToStudentUnionWebsite}
                
              >
                Join us
              </button>
          </div>
        </div>
      </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LandingHomePage;
