import React, { useState, useEffect } from 'react';
import Carousel from "react-bootstrap/Carousel";

function Event() {

    const [deadline, setDeadline] = useState(new Date("7/15/2022"));
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let diff = (deadline - new Date());
            setDay(Math.ceil(diff / (1000 * 60 * 60 * 24)));
            diff %= 1000 * 60 * 60 * 24;
            setHour(Math.ceil(diff / (1000 * 60 * 60)));
            diff %= 1000 * 60 * 60;
            setMinute(Math.ceil(diff / (1000 * 60)));
            diff %= 1000 * 60;
            setSecond(Math.ceil(diff / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="event-section" className="pb-5">
            <Carousel style={{ backgroundColor: "black", height: 700 }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="bird.jpg"
                        alt="First slide"
                        style={{ maxHeight: "700px", minWidth: "auto", objectFit: "none", filter: "saturate(1.5)" }}
                    />
                    <Carousel.Caption style={{ color: "white", fontFamily: "Gloria Hallelujah, cursive" }}>
                        <h3 style={{fontSize:"4em", paddingBottom: "150px"}}>Summer Student <br /> Sustainabilty Summit</h3>
                        <p className="mission-text" style={{ fontSize: "3em" }}>
                            <div style={{position: "absolute", bottom: "50px" }} className="d-flex flex-row justify-content-around flex-wrap w-100 p-3 pt-5">
                                {(() => {
                                    let fields = [];
                                    let times = { "Days": day, "Hours": hour, "Minutes": minute, "Seconds": second };
                                    for (let time in times) {
                                        fields.push(
                                            <div className="d-flex flex-column align-items-center">
                                                <div style={{ color: "white", position: "relative", bottom: "0.5em", fontFamily: "Amatic SC, cursive", fontSize: "6rem"}}>
                                                    {String(times[time]).padStart(2, '0')}
                                                </div>
                                                <div style={{ position: "relative", bottom: "1em", color: "white", fontFamily: "Amatic SC, cursive", fontSize: "5rem" }}>
                                                    {time}
                                                </div>
                                            </div>
                                        )
                                    }
                                    return (<>{fields}</>);
                                }
                                )()}
                            </div>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="ocean.jpg"
                        alt="Second slide"
                        style={{ maxHeight: "700px", minWidth: "auto", objectFit: "none" }}
                    />
                    <Carousel.Caption style={{ color: "white", fontFamily: "Gloria Hallelujah, cursive" }}>
                        <h3 style={{fontSize:"4em", paddingBottom: "150px"}}>Summer Student <br /> Sustainabilty Summit</h3>
                        <p className="mission-text" style={{ fontSize: "3em" }}>
                            <div style={{position: "absolute", bottom: "50px" }} className="d-flex flex-row justify-content-around flex-wrap w-100 p-3 pt-5">
                                {(() => {
                                    let fields = [];
                                    let times = { "Days": day, "Hours": hour, "Minutes": minute, "Seconds": second };
                                    for (let time in times) {
                                        fields.push(
                                            <div className="d-flex flex-column align-items-center">
                                                <div style={{ color: "white", position: "relative", bottom: "0.5em", fontFamily: "Amatic SC, cursive", fontSize: "6rem"}}>
                                                    {String(times[time]).padStart(2, '0')}
                                                </div>
                                                <div style={{ position: "relative", bottom: "1em", color: "white", fontFamily: "Amatic SC, cursive", fontSize: "5rem" }}>
                                                    {time}
                                                </div>
                                            </div>
                                        )
                                    }
                                    return (<>{fields}</>);
                                }
                                )()}
                            </div>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="mountain_range.jpg"
                        alt="Second slide"
                        style={{ maxHeight: "700px", minWidth: "auto", objectFit: "none" }}
                    />
                    <Carousel.Caption style={{ color: "white", fontFamily: "Gloria Hallelujah, cursive" }}>
                        <h3 style={{fontSize:"4em", paddingBottom: "150px"}}>Summer Student <br /> Sustainabilty Summit</h3>
                        <p className="mission-text" style={{ fontSize: "3em" }}>
                            <div style={{position: "absolute", bottom: "50px" }} className="d-flex flex-row justify-content-around flex-wrap w-100 p-3 pt-5">
                                {(() => {
                                    let fields = [];
                                    let times = { "Days": day, "Hours": hour, "Minutes": minute, "Seconds": second };
                                    for (let time in times) {
                                        fields.push(
                                            <div className="d-flex flex-column align-items-center">
                                                <div style={{ color: "white", position: "relative", bottom: "0.5em", fontFamily: "Amatic SC, cursive", fontSize: "6rem"}}>
                                                    {String(times[time]).padStart(2, '0')}
                                                </div>
                                                <div style={{ position: "relative", bottom: "1em", color: "white", fontFamily: "Amatic SC, cursive", fontSize: "5rem" }}>
                                                    {time}
                                                </div>
                                            </div>
                                        )
                                    }
                                    return (<>{fields}</>);
                                }
                                )()}
                            </div>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Event;