"use client";
import "./Pdf.css";
import "./Exam.css";
import { useState, useEffect } from "react";

export default function Exam() {
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0); // ✅ متغير لحفظ النتيجة

  const questions = [
    { id: 1, text: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"] },
    { id: 2, text: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
    { id: 3, text: "Which is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"] },
    { id: 4, text: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "N2"] },
    { id: 5, text: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"] }
  ];

  const correctAnswers = {
    1: "Paris",
    2: "4",
    3: "Jupiter",
    4: "H2O",
    5: "Shakespeare"
  };

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
            alert("⏳ انتهى الوقت!");
            calculateScore();
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

  const handleAnswerChange = (questionId, selectedOption) => {
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
    localStorage.setItem("examAnswers", JSON.stringify(updatedAnswers));
  };

  const calculateScore = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((qId) => {
      if (answers[qId] === correctAnswers[qId]) {
        correctCount++;
      }
    });
    setScore(correctCount); 
  };

  const handleSubmit = () => {
    let correctCount = 0;
  
    // ✅ حساب النتيجة
    Object.keys(correctAnswers).forEach((qId) => {
      if (answers[qId] === correctAnswers[qId]) {
        correctCount++;
      }
    });
  
    setScore(correctCount);
  
    setTimeout(() => {
      alert(`Your Score is: ${correctCount} / ${questions.length}`);
      localStorage.removeItem("examAnswers");
      setAnswers({}); 
      setCurrentQuestion(1);
      setShowModal(false); 
    }, 100);
  };
  

  const currentQ = questions[currentQuestion - 1];

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

            <div className="nav-buttons">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(1, prev - 1))}
                disabled={currentQuestion === 1}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentQuestion((prev) => Math.min(questions.length, prev + 1))}
                disabled={currentQuestion === questions.length}
              >
                Next
              </button>
            </div>


            {currentQuestion === questions.length && (
              <button className="submit-btn" onClick={handleSubmit}>Finish</button>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
