import React from 'react';
import Card from 'react-bootstrap/Card';

function EnvironmentStatistics() {
    return (
        <div id="problem-statistics" style={{display: "flex", width: "100%"}} className="colored-section">
            <Card style={{ width: '70%', height: "750px", right: "-20px", backgroundColor: '#d85b53', color: "white" }} className="border-0">
                <Card.Img variant="top" src="chart3.png" style={{ transform:'scale(1.2)', maxHeight: "50em", maxWidth: "35em", position: "relative", top: "23%", left: "100px"  }}/>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em", position: "relative", left: "-30px", top: "-330px" }}> Logistic Analysis </Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", fontSize: "1.2rem", textAlign: "center", position: "relative", left: "-50px", top: "120px", maxWidth: "700px" }}>
                        Using the graph, we can apply logistic
                        regression to estimate W(t), the primary
                        waste generated t years after 1960. 
                        Using W(t), we can apply the concept
                        of differential equations to find &nbsp;
                        <sup>dW</sup>&frasl;<sub>dt</sub>, the rate at which plastic 
                        pollution can be mitigated to our goal.
                        Through this analysis, we see that if
                        proper measures are taken, the rate at
                        which primary medical waste and plastics
                        are generated can decrease overtime.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '50%', maxHeight: "750px", right: "7px", backgroundColor: '#d85b53', color: "white" }} className="border-0">
                <Card.Img variant="top" src="calculus.png" style={{ maxHeight: "45em", maxWidth: "35em", position: "relative", top: "12px", right: "20px"  }}/>
            </Card>
        </div>
    );
}

export default EnvironmentStatistics;