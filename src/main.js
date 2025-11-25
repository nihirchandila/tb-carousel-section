import "./tailwind.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin); //register GSAP plugin motion path 

// cards carousel script start
// Variables to store responsive values
let card1Start, card1End;
let card2Start, card2End;
let card3Start, card3End;

// create timeline for carousel cards
function carouselTimeline() {
  const ct = gsap.timeline({
    scrollTrigger: {
      trigger: ".carousel-section",
      start: "top top", 
      pin: true, 
      scrub: 1, 
      end: "+=2000"
    }
  });

  // animate card 1 along arc path
  ct.to(".card-1", {
    motionPath: {
      path: "#arcPath",
      align: "#arcPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: 180,
      start: card1Start,
      end: card1End
    },
    ease: "none",
  });

  // animate card 2 along arc path
  ct.to(".card-2", {
    delay: 0.05, // small delay for stagger
    motionPath: {
      path: "#arcPath",
      align: "#arcPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: 180,
      start: card2Start,
      end: card2End
    },
    ease: "none",
  }, 0); // start at same time as previous

  // animate card 3 along arc path
  ct.to(".card-3", {
    delay: 0.08, // small delay for stagger
    motionPath: {
      path: "#arcPath",
      align: "#arcPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: 180,
      start: card3Start,
      end: card3End
    },
    ease: "none",
  }, 0); // start at same time as previous
}


// start and end points setup for responsive breakpoints

let mm = gsap.matchMedia(); // only executes when a particular media query matches below

mm.add("(min-width: 1025px)", () => {// for screen size above 1200px
  card1Start = 0.85; card1End = 0.30;// start from right, ends at left within viewport
  card2Start = 0.90; card2End = 0.50;// start from right, ends at center
  card3Start = 0.95; card3End = 0.70;// start from right, ends at right within viewport
  carouselTimeline();
});

mm.add("(min-width: 768px) and (max-width: 1024px)", () => { // between 768 and 1200px
  card1Start = 0.90; card1End = 0.0;
  card2Start = 0.95; card2End = 0.25;
  card3Start = 1.0; card3End = 0.5;
  carouselTimeline();
});

mm.add("(max-width: 767px)", () => {// for less than 768px
  card1Start = 0.80; card1End = 0.0;
  card2Start = 0.90; card2End = 0.25;
  card3Start = 1.0; card3End = 0.5;
  carouselTimeline();
});

window.addEventListener("resize", () => {
    ScrollTrigger.refresh(); // reset start and end points on window resize
});
// cards carousel script end
