// https://greensock.com/docs/v3/Plugins/ScrollTrigger/
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function useGsapRevealAnimation( htmlElement, positionInitial, positionFinal ) {

    useEffect(()=>{
        if (htmlElement.current) {
            const elem = htmlElement.current
            hide(elem); // assure that the element is hidden when scrolled into view
      
            
            ScrollTrigger.create({
                trigger: elem,
                onEnter: function() { hide(elem); animateFrom(elem, positionInitial, positionFinal); }, 
                onEnterBack: function() { hide(elem); animateFrom(elem, positionInitial, positionFinal) },
                onLeaveBack: function() {},
                onLeave: function() {},
                onToggle: self => {
                    hide(elem)
                    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                },
                onUpdate: self => {
                    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                },
                
            });
        }
    },[htmlElement])



    return null
}

/** ---------- functions -------- */

function hide (elem) {
    gsap.set(elem, {autoAlpha: 0});
    // elem.style.autoAlpha = 0
}

/**
 * 
 * @param {HTMLElement} elem 
 * @param {Array<number>} positionInitial -> [xi, yi] -> [300, 0]
 * @param {Array<number>} positionFinal   -> [xf, xf] -> [0, 0]
 */
function animateFrom (elem, positionInitial, positionFinal) {
    
    hide(elem)
    
    let x = positionInitial[0],
        y = positionInitial[1];

    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: positionFinal[0],
      y: positionFinal[1], 
      autoAlpha: 1,
      ease: "expo", 
      overwrite: "auto",
      onComplete: () => {
        // console.log('complete!')
        // console.log(elem.style.opacity)
        // elem.style.opacity = 0.0;
      }
    });
  }
  