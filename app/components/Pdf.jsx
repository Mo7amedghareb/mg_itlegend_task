
"use client";
import "./Pdf.css"
import { useState } from "react";

export default function PDFModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      {/* PDF Icon Button */}
      <button className="pdfbtn"
        onClick={() => setShowModal(true)}>
        📄
      </button>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              height: "90%",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "20px",
                border: "none",
                backgroundColor: "red",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/inheritance.pdf"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
