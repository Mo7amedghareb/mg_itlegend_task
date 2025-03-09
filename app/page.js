"use client";
import { useEffect, useRef, useState } from "react";
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
  const [percentage, setPercentage] = useState(0);
  const progressBarRef = useRef(null);

  // مراقبة ظهور progress bar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgress(50);
          setPercentage(50);
        }
      },
      { threshold: 0.5 } // نصف العنصر يجب أن يكون ظاهرًا لتفعيله
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setProgress((prevProgress) => Math.min(prevProgress + 100 / videos.length, 100));
    setPercentage((prevPercentage) => Math.min(prevPercentage + 100 / videos.length, 100));
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
        <h4 style={{ marginBottom: "10px" }} className="routes">
          Home <i className="fa-solid fa-angle-right" /> Courses <i className="fa-solid fa-angle-right" /> Course Details
        </h4>
        <h2 style={{ marginLeft: "20px" }}>Starting SEO As Your Home</h2>
        <h2 style={{ marginLeft: "20px" }} id="secondh">Based Business</h2>
      </div>

      <div className="container">
        <div className="firstsecond">
          <div className="firstsection">
            <div className="video">
              <div className="leftdiv">
                <video key={currentIndex} src={videos[currentIndex]} controls autoPlay onEnded={handleVideoEnd} />
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
              <div className="progressbar" ref={progressBarRef}>
                <h2>Topics of this course</h2>
                <div className="progress-container" style={{ position: "relative", height: "10px", background: "#ddd", borderRadius: "5px" }}>
                  <div
                    className="animate-progress"
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "blue",
                      borderRadius: "5px",
                      transition: "width 3s ease-in-out"
                    }}
                  />
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
