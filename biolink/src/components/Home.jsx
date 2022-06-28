import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <div id="home" className="pb-5">
            <Carousel style={{ backgroundColor: "black", height: 700 }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="virus.jpg"
                        alt="First slide"
                        style={{ maxHeight: "700px", minWidth: "auto", objectFit: "none" }}
                    />
                    <Carousel.Caption style={{ color: "white", fontFamily: "Gloria Hallelujah, cursive" }}>
                        <h3 style={{fontSize:"4em"}}>Our Mission</h3>
                        <p className="mission-text" style={{ fontSize: "3em" }}>
                            Let's Employ BioTechnology to <br />
                            Solve the Environment's <br />
                            Greatest Challenges Together! <br />
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="virus2.jpg"
                        alt="Second slide"
                        style={{ maxHeight: "700px", minWidth: "auto", objectFit: "none" }}
                    />
                    <Carousel.Caption style={{ color: "white", fontFamily: "Gloria Hallelujah, cursive" }}>
                        <h3 style={{fontSize:"4em"}}>One Step At a Time</h3>
                        <p className="mission-text" style={{ fontSize: "3em" }}>
                            It is Our Duty to  <br />
                            Find Contemporary Solutions<br />
                            to Plastic Pollution <br />
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="virus-icon d-block w-100"
                        src="virus3.png"
                        alt="Third slide"
                        style={{ transform: "scale(0.5)", objectFit: "none" }}
                    />
                    <Carousel.Caption style={{ color: "white", fontFamily: "Gloria Hallelujah, cursive" }}>
                        <div className="third-slide-text">
                            <h3 style={{fontSize:"4em", position: 'relative', top: "50px"}}>Join us</h3>
                            <p className="mission-text" style={{ fontSize: "3em" }}>
                                In our Goal to Create <br />
                                an Environment Free of <br />
                                Hazardous Waste <br />
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;