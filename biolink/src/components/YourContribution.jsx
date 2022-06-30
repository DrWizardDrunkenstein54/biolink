import React from "react";
import Card from "react-bootstrap/Card";


function YourContribution() {
    return (
        <div id="contribution-section" className="colored-section d-flex justify-content-around flex-wrap w-100 p-3 my-5">
            <Card style={{ width: '60rem', maxHeight: '320px', paddingTop: "50px", backgroundColor: "black", color: "white" }} className="border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: "Gloria Hallelujah, cursive", fontSize: "4em" }}> Your Contribution </Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.2rem", paddingTop: "20px" }}>
                        Going forward it is important that we 
                        as consumers are wary of the dangers 
                        we pose to the environment so to help 
                        mitigate further plastic pollution 
                        you can properly dispose of face masks 
                        — do not litter! Using a single mask as 
                        many times as you can while staying safe 
                        as well as using reusable cloth masks 
                        or biodegradable masks instead of 
                        single-use disposable masks can also 
                        have a significant impact. Finally, 
                        support cutting-edge research about 
                        biodegradable mask technology will 
                        allow us to transform the plastic 
                        pollution crisis into a more 
                        manageable epidemic.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default YourContribution;