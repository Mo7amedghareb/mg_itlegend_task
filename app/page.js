"use client";
import { useRef, useState } from "react";
import Icons from "./components/Icons";
import Coursematerials from "./components/Coursematerials";
import Testomonials from "./components/Testomonials";
import Rightsection from "./components/Rightsection";

export default function Home() {
  const videos = [
    "WhatsApp Video 2025-03-05 at 3.00.02 PM.mp4",
    "videoplayback1.mp4",
    "videoplayback2.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(30);
  const [percentage, setpercentage] = useState(30);

  const handleVideoEnd = () => {
    // Move to the next video
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);

    // Increase progress based on total videos

    setProgress((prevProgress) => Math.min(prevProgress + 100 / videos.length, 100));
    setpercentage((prevPercentage) => Math.min(prevPercentage + 100 / videos.length, 100));
  };

  const testomonialsRef = useRef(null);
  const scrollToTestomonials = () => {
    testomonialsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const CurriculmRef = useRef(null);
  const scrollTocurriculm = () => {
    CurriculmRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div id="title">
        <h4 style={{marginBottom:'10px'}} className="routes">Home <i className="fa-solid fa-angle-right" /> Courses <i className="fa-solid fa-angle-right" /> Course Details</h4>
        <h2 >Starting SEO As Your Home</h2>
        <h2 id="secondh">Based Business</h2>
      </div>

      <div className="container">
        <div className="firstsecond">
          <div className="firstsection">
            <div className="video">
              <div className="leftdiv">
                <video
                  key={currentIndex}
                  src={videos[currentIndex]}
                  controls
                  autoPlay
                  onEnded={handleVideoEnd}
                />
              </div>
            </div>
            <div className="icons">
              <Icons scrollToTestomonials={scrollToTestomonials} scrollTocurriculm={scrollTocurriculm} />
            </div>
            <div className="coursematerials" ref={CurriculmRef}>
              <Coursematerials />
            </div>
          </div>
          <div className="secondsection">
            <div className="rightsection">
              <div className="progressbar">
                <h2>Topics of this course</h2>
                <div className="progress-container">
                  <div className="animate-progress" style={{ width: `${progress}%` }} />
                </div>
                <h6 style={{ left: `${progress * videos.length}px` }}>{Math.round(percentage)}%</h6>
              </div>
              <Rightsection />
            </div>
          </div>

        </div>


        <div className="thirdsection">
          <div ref={testomonialsRef}>
            <Testomonials />
          </div>
        </div>

      </div>

      <script src="https://kit.fontawesome.com/01bcf5ff16.js" crossOrigin="anonymous"></script>
    </>
  );
}

