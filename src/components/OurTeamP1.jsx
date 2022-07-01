import React from "react";
import Card from 'react-bootstrap/Card';

function OurTeamP1() {
    return (
        <div style={{paddingTop: "150px"}}>
            <Card style={{ maxWidth: "550px", maxHeight: "800px", left: "140px", backgroundColor: 'black', color: "white" }} className="border-0 w-100 p-3 my-5">
                <Card.Img className="portrait-picture" variant="top" src="eyiram.png" style={{ maxHeight: "30em", maxWidth: "35em", position: "relative", top: "1.25em"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>Eyiram Nutor</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem" }}>
                        Hey, my name is Eyiram, and I am 
                        a rising senior from Columbus, 
                        Ohio. I’m currently in the Innovations 
                        in Science & Technology program in 
                        YYGS and my favorite aspects of YYGS 
                        are the ability to learn directly from 
                        professionals in specific fields you 
                        may want to enter coupled with learning 
                        for the sake of enriching your knowledge.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ maxWidth: "550px", maxHeight: "800px", left: "140px", backgroundColor: 'black', color: "white" }} className="border-0 w-100 p-3 my-5">
                <Card.Img className="portrait-picture" variant="top" src="antony.png" style={{ maxHeight: "30em", maxWidth: "35em", position: "relative", top: "1.25em"  }}/>
                <br />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>On Chi He</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.3rem" }}>
                        Hi! My name is Antony, and I 
                        am a rising junior from Shanghai, 
                        China, currently in the Literature, 
                        Philosophy, and Culture session in 
                        YYGS. My favorite thing about YYGS 
                        is being able to meet new people and 
                        interact with them, getting to know 
                        people from all around the world was 
                        a wonderful experience.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OurTeamP1;