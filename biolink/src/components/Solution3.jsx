import React from "react"
import Card from "react-bootstrap/Card";

function Solution3() {
    return (
        <div id="solution-three">
            <img className="person-image" src="mask2.png" />
            <Card style={{ width: '40rem', position: "relative", left: "770px", top: "-700px", backgroundColor: "rgba(255, 255, 255, 0.8)", color: "black" }} className="border-0">
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title style={{ fontFamily: "Gloria Hallelujah, cursive", fontSize: "4.2em" }}>3. Sustainable Mask Technology </Card.Title>
                    <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center", paddingBottom: "20px" }}>
                        Innovations in technology are our 
                        most powerful tool to mitigate the 
                        plastic pollution caused by left-behind 
                        masks. The two main avenues of mask 
                        innovation are biodegradable masks and 
                        reusable masks. A team of researchers in 
                        MIT has recently developed a <u><a style={{color: "black"}} href="https://news.mit.edu/2020/reusable-silicone-rubber-face-mask-0709">reusable silicone </a></u>
                        mask that can be disinfected and 
                        worn repetitively by different individuals, 
                        while <u><a style={{color: "black"}} href="https://www.bloomberg.com/news/articles/2021-12-22/making-green-disposable-face-masks-that-won-t-become-ocean-plastic"> several companies </a></u> have experimented with 
                        biodegradable masks made of natural materials 
                        that can be broken down within a few months after use.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Solution3;