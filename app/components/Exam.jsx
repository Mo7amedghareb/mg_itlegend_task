"use client";
import "./Pdf.css";
import "./Exam.css";
import { useState, useEffect } from "react";

export default function Exam() {
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const questions = [
    { id: 1, text: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"] },
    { id: 2, text: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
    { id: 3, text: "Which is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"] },
    { id: 4, text: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "N2"] },
    { id: 5, text: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"] }
  ];

  // ✅ تحميل التقدم المحفوظ عند فتح الامتحان
  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem("examAnswers")) || {};
    setAnswers(savedAnswers);
  }, []);

  useEffect(() => {
    if (showModal) {
      setTimeLeft(600);
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setShowModal(false);
            alert("انتهى الوقت!");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showModal]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // ✅ تحديث الإجابات وحفظها في localStorage
  const handleAnswerChange = (questionId, selectedOption) => {
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
    localStorage.setItem("examAnswers", JSON.stringify(updatedAnswers)); // حفظ الإجابات
  };

  const currentQ = questions[currentQuestion - 1]; // ✅ تجنب التكرار في الكود

  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      <button className="pdfbtn" onClick={() => setShowModal(true)}>
        📄
      </button>

      {showModal && (
        <div className="modal-container">
          <div className="exam-box">
            <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>

            <h2 className="timer">⏳ {formatTime(timeLeft)}</h2>

            {/* ✅ قائمة التنقل بين الأسئلة */}
            <ul className="questionsurl">
              {questions.map((q) => (
                <li 
                  key={q.id} 
                  onClick={() => setCurrentQuestion(q.id)} 
                  className={currentQuestion === q.id ? "active" : ""}
                >
                  {q.id}
                </li>
              ))}
            </ul>

            {/* ✅ عرض السؤال والإجابات */}
            <div className="question">
              <h3>{currentQ.id}. {currentQ.text}</h3>
              <ul className="answers-list">
                {currentQ.options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name={`question-${currentQ.id}`}
                      value={option}
                      checked={answers[currentQ.id] === option}
                      onChange={() => handleAnswerChange(currentQ.id, option)}
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
