import React from "react"
import Card from "react-bootstrap/Card";

function Solution2() {
    return (
        <div id="solution-two">
            <img className="fungi-image" src="fungi.jpg" />
            <Card style={{ width: '40rem', position: "relative", left: "100px", top: "-340px", backgroundColor: "rgba(255, 255, 255, 0.8)", color: "black" }} className="border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: "Gloria Hallelujah, cursive", fontSize: "4.2em", textAlign: "center" }}>2. Plastic-Eating Fungi </Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", paddingTop: "20px" }}>
                        To aid in addressing plastic pollution 
                        that the world has already produced, 
                        research has been done on fungi which 
                        break down the bonds in polymers, thereby 
                        reducing the lifetime of plastics. 
                        Researchers have identified fungal 
                        species such as Aspergillus tubingensis 
                        and some of the members of the Pestalotiopsis 
                        genus as fungi with plastic degrading capabilities. 
                        In the context of current mask pollution, 
                        rising plastic pollution levels caused by masks 
                        could be lessened with the use of such fungi 
                        as biodegrading agents.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Solution2;