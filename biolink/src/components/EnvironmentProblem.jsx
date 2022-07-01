import React from 'react';
import Card from 'react-bootstrap/Card';

function EnvironmentProblem() {
    return (
        <div id="environment-problem" className="main-problem-section d-flex justify-content-around flex-wrap w-100 p-3 my-5">
            <Card style={{ width: '50rem', maxHeight: '400px', backgroundColor: "rgba(0, 0, 0, 0.7", color: "white" }} className="border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: "Gloria Hallelujah, cursive", fontSize: "3.5em" }}>The Environmental Cost</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", fontSize: "1.2rem", paddingTop: "20px" }}>
                        Animals such as birds have started to use masks for nesting
                        material, or get their feet and wings caught in mask loops,
                        while fish can get caught in plastic gloves or tangled in
                        masks, sea turtles have even been reported consuming
                        face masks, which they presumably believe to be
                        jellyfish. As a result of the influx of medical
                        waste, including masks and gloves, sewers and waterways
                        are becoming clogged. When trying to put masks through
                        machinery, plastic breaks down the machine which
                        releases greenhouse gasses. We need a better solution.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EnvironmentProblem;