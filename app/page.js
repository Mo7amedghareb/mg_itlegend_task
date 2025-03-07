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
  const [progress, setProgress] = useState(0);

  const handleVideoEnd = () => {
    // Move to the next video
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);

    // Increase progress based on total videos
    setProgress((prevProgress) => prevProgress + 100 / videos.length);
  };

  const testomonialsRef = useRef(null);
  const scrollToTestomonials = () => {
    testomonialsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <h4 className="routes">Home <i className="fa-solid fa-angle-right" /> Courses <i className="fa-solid fa-angle-right" /> Course Details</h4>
      <h1 id="title">Starting SEO As Your Home</h1>
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
              <Icons scrollToTestomonials={scrollToTestomonials} />
            </div>
            <div className="coursematerials">

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

