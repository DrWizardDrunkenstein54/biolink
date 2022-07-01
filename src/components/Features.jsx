import React from 'react';
import Card from 'react-bootstrap/Card';

function Features() {
    return (
        <div className="d-flex justify-content-around flex-wrap w-100 p-3 my-5" >
            <Card style={{ width: '18rem' }} className="border-0">
                <Card.Img variant="top" src="statistics.svg" style={{ maxHeight: "17em", position: "relative", top: "1em"  }}/>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>Statistics.</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center" }}>
                        Using Statistics, we can highlight
                        the issue of plastic pollution
                        and how it has been exacerbated
                        by the pandemic.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="border-0">
                <Card.Img variant="top" src="health.svg" style={{ maxHeight: "17em", position: "relative", top: "1em"  }}/>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>Technology.</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center" }}>
                        Technology is the key to
                        creating cutting-edge methods
                        of managing plastic waste.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="border-0">
                <Card.Img variant="top" src="leaf.svg" style={{ maxHeight: "17em", position: "relative", top: "1em"  }}/>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: 'Dosis, sans-serif', fontSize: "4.2em" }}>Nature.</Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center" }}>
                        With the help of nature, we
                        can find environmentally
                        sustainable solutions to
                        the production of face masks,
                        COVID-19 tests, and 
                        other medical waste.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Features;