import React from "react"
import Card from "react-bootstrap/Card";

function Solution1() {
    return (
        <div id="solution-one">
            <center><h1 style={{ fontFamily: "Gloria Hallelujah, cursive", color: "white", fontSize: "4em", paddingTop: "20px"}}>Proposed Solutions</h1></center>
            <img className="recycle-image" src="recycle.jpg" />
            <Card style={{ width: '40rem', position: "relative", left: "730px", top: "-420px", backgroundColor: "rgba(255, 255, 255, 0.7)", color: "black" }} className="border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: "Gloria Hallelujah, cursive", fontSize: "4.2em" }}>1. Recycling </Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", paddingTop: "20px" }}>
                        Single-use disposable face masks
                        are primarily composed of polypropylene,
                        a plastic polymer that takes hundreds
                        of years to break down. Currently, per
                        the UN, an estimated 75% of masks end
                        up in landfills, instead of being 
                        recycled. Masks currently pose a 
                        challenge to recycling as they are 
                        often made of many different materials
                        that are difficult to separate.  
                        In order to reduce the environmental 
                        effects of plastic masks, companies can 
                        use alternative materials that are easier 
                        to recycle. A technique known as autoclaving
                        can aid in decreasing the volume of landfills
                        created by plastic wastes. Not only does it
                        effectively kill pathogens, but it also 
                        increases the efficiency towards recycling 
                        medical wastes that are plastic.
                    </Card.Text>
                </Card.Body>
            </Card>
       
        </div>
    );
}

export default Solution1;