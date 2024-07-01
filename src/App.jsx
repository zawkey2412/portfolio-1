import React, { useRef, useEffect } from "react";
import Navtime from "./component/nav-timeline";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import "./style.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef();

  useEffect(() => {
    let steps = gsap.utils.toArray(".section");
    const timelineElements = document.querySelectorAll(".timeline");

    gsap.set(timelineElements, { autoAlpha: 0 }); // Initially hide the timeline

    const showTimeline = () => {
      gsap.to(timelineElements, { autoAlpha: 1, duration: 0.5, overwrite: true });
    };

    const hideTimeline = () => {
      gsap.to(timelineElements, { autoAlpha: 0, delay: 1, duration: 0.5, overwrite: true });
    };

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=" + steps.length * 100 + "%",
      onUpdate: (self) => {
        if (self.direction !== 0) {
          showTimeline();
        } else {
          hideTimeline();
        }
      },
    });

    steps.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top " + i * -100 + "%",
        end: "+=100%",
        onEnter: () => showTimeline(),
        onLeave: () => hideTimeline(),
        onEnterBack: () => showTimeline(),
        onLeaveBack: () => hideTimeline(),
      });
    });
  }, []);

  return (
    <div ref={container} className="par-con h-full">
      <div>
        <div className="timeline fixed inset-y-1/2 right-0 text-white">c</div>
      </div>
      <div className="children-con h-full">
        <div className="section h-full">a</div>
        <div className="section h-full">b</div>
        <div className="section h-full">c</div>
      </div>
    </div>
  );
}

export default App;
