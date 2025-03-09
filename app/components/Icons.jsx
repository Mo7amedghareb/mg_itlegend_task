import "./icons.css";
import Testomonials from "./Testomonials";
import { useState, useEffect } from "react";

export default function Icons({ scrollToTestomonials ,scrollTocurriculm } ) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [questionText, setQuestionText] = useState("");

    // ✅ عند تحميل الصفحة، استرجع النص المحفوظ في sessionStorage
    useEffect(() => {
        const savedQuestion = sessionStorage.getItem("userQuestion");
        if (savedQuestion) {
            setQuestionText(savedQuestion);
        }
    }, []);

    // ✅ تحديث النص وحفظه في sessionStorage عند التغيير
    const handleTextChange = (e) => {
        setQuestionText(e.target.value);
        sessionStorage.setItem("userQuestion", e.target.value);
    };

    // ✅ فتح وغلق النافذة
    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    const [isLeaderPopOpen, setIsLeaderPopOpen] = useState(false);
    const leaderOpen = () => setIsLeaderPopOpen(true);
    const leaderClose = () => setIsLeaderPopOpen(false);

    return (
        <>
            {/* icons sections */}
            <div className="main">
                <div className="icons-div" onClick={scrollTocurriculm}>
                    <i id="icon" className="fa-solid fa-book"/>
                </div>

                <div className="icons-div" onClick={scrollToTestomonials}>
                    <i id="icon" className="fa-solid fa-comments" />
                </div>
                <div className="icons-div" onClick={openPopup}>
                    <i id="icon" className="fa-solid fa-question" />
                </div>
                <div className="icons-div" onClick={leaderOpen}>
                    <i id="icon" className="fa-solid fa-trophy" />
                </div>
            </div>

            {/*  question Popup Modal */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>✖</button>
                        <div>
                            <h1 id="ask">Ask Your Question :</h1>
                            <textarea
                                className="poptxtarea"
                                value={questionText}
                                onChange={handleTextChange}
                            />
                        </div>
                        <button className="sendbutton" onClick={closePopup}>Send</button>
                    </div>
                </div>
            )}

            {/* leader Popup Modal */}
            {isLeaderPopOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={leaderClose}>✖</button>
                        <div style={{ textAlign: 'center' }}>
                            <h1>Course Name : C#</h1>
                            <h3>Leaderboard</h3>
                            <div className="leadertext">
                                <p>عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا</p>
                                <h1 style={{ marginRight: '20px' }}>💪</h1>
                            </div>
                            <div className="leaderboard">
                                <div className="leaderboardmembers"></div>
                                <div className="leaderboardmembers"></div>
                                <div className="leaderboardmembers"></div>
                                <div className="leaderboardmembers"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
