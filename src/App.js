import './App.css';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"

export const MyComponent = () => {
  const rounded = "Why Worry"
  
  return(
    <motion.div
     className='motion'
     whileHover={{
      scale: 0.9,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 1.2 }}
     animate={{
          color:["#000"],
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 170, 170, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}>{rounded}</motion.div>
  )
}

export const MyLink = () => {
  const rounded = <a
  className="App-link"
  href="https://t.me/+eR2eTp9YgJ1mZGE1"
  target="_blank"
  rel="noopener noreferrer"
>
  Link or something
</a>
  
  return(
    <motion.div
      className='Link'
      whileHover={{ scale: 1.2 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
      whileTap={{ scale: 0.9 }}
    >{rounded}</motion.div>
  )
}

function OcticonThumbsup16() {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" ><path fill="currentColor" d="M8.834.066c.763.087 1.5.295 2.01.884c.505.581.656 1.378.656 2.3c0 .467-.087 1.119-.157 1.637L11.328 5h1.422c.603 0 1.174.085 1.668.333c.508.254.911.679 1.137 1.2c.453.998.438 2.447.188 4.316l-.04.306c-.105.79-.195 1.473-.313 2.033c-.131.63-.315 1.209-.668 1.672C13.97 15.847 12.706 16 11 16c-1.848 0-3.234-.333-4.388-.653q-.247-.068-.475-.133c-.658-.186-1.2-.34-1.725-.415A1.75 1.75 0 0 1 2.75 16h-1A1.75 1.75 0 0 1 0 14.25v-7.5C0 5.784.784 5 1.75 5h1a1.75 1.75 0 0 1 1.514.872c.258-.105.59-.268.918-.508C5.853 4.874 6.5 4.079 6.5 2.75v-.5c0-1.202.994-2.337 2.334-2.184M4.5 13.3c.705.088 1.39.284 2.072.478l.441.125c1.096.305 2.334.598 3.987.598c1.794 0 2.28-.223 2.528-.549c.147-.193.276-.505.394-1.07c.105-.502.188-1.124.295-1.93l.04-.3c.25-1.882.189-2.933-.068-3.497a.92.92 0 0 0-.442-.48c-.208-.104-.52-.174-.997-.174H11c-.686 0-1.295-.577-1.206-1.336q.036-.29.076-.586c.065-.488.13-.97.13-1.328c0-.809-.144-1.15-.288-1.316c-.137-.158-.402-.304-1.048-.378C8.357 1.521 8 1.793 8 2.25v.5c0 1.922-.978 3.128-1.933 3.825a5.8 5.8 0 0 1-1.567.81ZM2.75 6.5h-1a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25"></path></svg>);
}

function App() {
  const [animationClass, setAnimationClass] = useState(false)
  const elementRef = useRef(null);
  const elementRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setAnimationClass(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    if(animationClass){
      if (elementRef.current) {
        elementRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      const element = document.getElementById('appLogoId');
      if (element) {
        setTimeout(() => {
          setAnimationClass(false)
        },[5000])
      }
    }
  },[animationClass])

  return (<>
    <div className="App">
      <header className="App-header">
        <MyComponent />
        
        <p>
          Are You HAppy, Motivated, Excited and some more words...
        </p>
        <p>Don't worry and contact us.</p>
        <MyLink />
        {/* <a
          className="App-link"
          href="https://t.me/+eR2eTp9YgJ1mZGE1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link or something
        </a> */}
        <p>We will make you give up <OcticonThumbsup16 /></p>
        <div ref={elementRef2} className={`${animationClass && 'App-logo-div'}`} id="appLogoId">
        </div>
      </header>
    </div>
    <p >Don't worry we are genuine</p>
    <p ref={elementRef} style={{marginBottom:'75px'}}>We gave up on making our own site</p>
  </>);
}

export default App;
