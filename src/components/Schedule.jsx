import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Schedule() {
    const args = [{
                    title: "Opening Ceremony",
                    description: "An introduction to the plan of the day, speakers, and discussion topics.",
                    time: "7/15 9:00 am"
                }, {
                    title: "Discussion Panel",
                    description: "An open space to voice concerns about the growing plastic pollution epidemic and discuss possible solutions.",
                    time: "7/15 10:30 pm"
                }, {
                    title: "Lunch",
                    description: "A 1 hour break to eat lunch.",
                    time: "7/15 12:00 pm"
                }, {
                    title: "Debrief",
                    description: "Discuss possible solutions and innovations that can be used to slow plastic pollution.",
                    time: "7/15 1:00 pm"
                }, {
                    title: "Closing Ceremony",
                    description: "Thank You to everyone attending our Summit and future plans. ",
                    time: "7/15 2:00 pm"
                }
                ]

    return (
        <div id="schedule" className="my-5 py-5">
            <VerticalTimeline lineColor="#d85b53">
                {(() => {
                    let fields = [];
                    for (let arg in args) {
                        fields.push(
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work "
                                contentStyle={{ background: '#fff', color: 'black'}}
                                contentArrowStyle={{ borderRight: '7px solid  #d85b53' }}
                                date={args[arg].time}
                                iconStyle={{ background: '#d85b53', color: '#d85b53' }}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Gloria Hallelujah, cursive", fontSize: "2.5em"}}>
                                    {args[arg].title}
                                </h3>
                                <p>
                                    {args[arg].description}
                                </p>
                            </VerticalTimelineElement>
                        )
                    }
                    return (<>{fields}</>);
                }
                )()}
            </VerticalTimeline>
        </div>
    );
}

export default Schedule;