import './coursematerial.css'
export default function Coursematerials() {
    return (
        <>
            {/* course materials section */}
            <h1>Course Materials</h1>
            <div className="Main">
                <div className="left" >
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-clock" />
                            <p>duration</p>
                        </div>
                        <p>3weeks</p>
                    </div>
                    <hr></hr>
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-book" />
                            <p>Lessons:</p>
                        </div>
                        <p>8</p>
                    </div>
                    <hr></hr>
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-user"></i>
                            <p>Enrolled:</p>
                        </div>
                        <p>65 students</p>
                    </div>
                    <hr></hr>
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-globe" />
                            <p>Language:</p>
                        </div>
                        <p>English</p>
                    </div>
                    <hr></hr>
                </div>

                <div className="right">
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-clock" />
                            <p>duration</p>
                        </div>
                        <p>3weeks</p>
                    </div>
                    <hr></hr>
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-book" />
                            <p>Lessons:</p>
                        </div>
                        <p>8</p>
                    </div>
                    <hr></hr>
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-user"></i>
                            <p>Enrolled:</p>
                        </div>
                        <p>65 students</p>
                    </div>
                    <hr></hr>
                    <div className='title' >
                        <div className='value'>
                            <i id='icon' className="fa-solid fa-globe" />
                            <p>Language:</p>
                        </div>
                        <p>English</p>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </>
    )
}