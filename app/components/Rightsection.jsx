import Exam from "./Exam"
import PDFModal from "./Pdf"
import "./rightsection.css"
export default function Rightsection() {
    return (
        <>
            <div className="course-details">
                <h3 id="week1-4">Week 1-4</h3>
                <p className="paragraph">Advanced Story Telling techniques for writers Personas, Characters & plots</p>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">introduction</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">Course Overview</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">Course Overview</p>
                    </div>
                    <div className="qanda">
                        <div className="questions">0 Questions</div>
                        <div className="answers">10 Answers</div>
                    </div>
                    
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">Course excersises / reference files</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">code editor installation (optional if you have one)</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <Exam/>
                        <p className="text">Embedding php in html</p>
                    </div>

                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
            </div>


            <div className="course-details">
                <h3 id="week1-4">Week 1-4</h3>
                <p className="paragraph">Advanced Story Telling techniques for writers Personas, Characters & plots</p>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">introduction</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">Course Overview</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">Course Overview</p>
                    </div>
                    <div className="qanda">
                    <div className="questions">0 Questions</div>
                    <div className="answers">10 Answers</div>
                    </div>
                    
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">Course excersises / reference files</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                        <PDFModal />
                        <p className="text">code editor installation (optional if you have one)</p>
                    </div>
                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
                <div className="title-icon">
                    <div style={{ display: 'flex' }}>
                    <Exam/>
                        <p className="text">Embedding php in html</p>
                    </div>

                    <i className="fa-solid fa-lock" />
                </div>
                <hr></hr>
            </div>
        </>
    )
}