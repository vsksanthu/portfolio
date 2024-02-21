import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import {
    Container,
    Row,
  } from "react-bootstrap";

const Achievements = ({heading }) => {
    console.log("heading",heading)
    return (
        <Jumbotron fluid id="achievements">
            <Container className="p-5 ">
            <h2 className="display-4 pb-5 text-center">
                    {heading}
                </h2>
                <div className="main-timeline">
                {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            {/* <span className="month">Present</span> */}
                                    <span className="year">2023</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Senior Frontend Developer - L4</h5>
                                <p className="description">
                                    Senior Frontend Developer in Saama Technologies Pvt Ltd - Chennai
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            {/* <span className="month">6 Months</span> */}
                                    <span className="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">UI Developer</h5>
                                <p className="description">
                                    Upskillist India Pvt Ltd - Bangalore
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            {/* <span className="month">6 Years</span> */}
                                    <span className="year">2016</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Senior Full Stack Developer</h5>
                                <p className="description">
                                   Checksum Infosoft Pvt Ltd - Bangalore
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                        {/* <!-- start experience section--> */}
                        <div className="timeline">
                            <div className="icon"></div>
                            <div className="date-content">
                                <div className="date-outer">
                                    <span className="date">
                                            {/* <span className="month">2 Years</span> */}
                                    <span className="year">2013</span>
                                    </span>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <h5 className="title">Full Stack Developer</h5>
                                <p className="description">
                                   Nichehands Technologies Pvt Ltd - Bangalore
                                </p>
                            </div>
                        </div>
                        {/* <!-- end experience section--> */}
                </div>
                
            </Container>
           
        </Jumbotron>

    )
}
export default Achievements;