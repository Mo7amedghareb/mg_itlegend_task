import "./testomonials.css"
export default function Testomonials(){
    return(
        <>
        {/* comments */}
        <h1 className="header">Comments</h1>
          <div id="testomonials" >
            <div className="review">
              <img className="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xAqy_L2HwwIE_rx1VNbr2wBeVUrl07bwqg&s" />
              <div className="data">
                <h3 className="username">Student Name goes here</h3>
                <p className="reviewparagraph">Oct 10, 2021</p>
                <br></br>
                <p className="reviewparagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
            <div className="review">
              <img className="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xAqy_L2HwwIE_rx1VNbr2wBeVUrl07bwqg&s" />
              <div className="data">
                <h3 className="username">Student Name goes here</h3>
                <p className="reviewparagraph">Oct 10, 2021</p>
                <br></br>
                <p className="reviewparagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
            <div className="review">
              <img className="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xAqy_L2HwwIE_rx1VNbr2wBeVUrl07bwqg&s" />
              <div className="data">
                <h3 className="username">Student Name goes here</h3>
                <p className="reviewparagraph">Oct 10, 2021</p>
                <br></br>
                <p className="reviewparagraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
            <div className="txtarea">
              <textarea className="txtarea" defaultValue='Write a comment'/>
            </div>
            <button className="submitbtn">Submit Review <i  className="fa-solid fa-arrow-right"/> </button>
          </div>
        </>
    )
}