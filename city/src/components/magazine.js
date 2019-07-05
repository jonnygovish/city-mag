import React from "react";
import './../styles.css';
import line1 from '../img/line1.png';
import { MDBBtn } from "mdbreact";

class Magazine extends React.Component{
    render(){
        return(
            <div id="test">
            <div className="the100">
                <div className="flex-center flex-column magazine">
                    <div className="col-sm-4 offset-sm-4 theButton">
                        <h4 className="myMag">Checkout our Media Kit</h4>
                        <a href="issu.html">
                            {/* < MDBBtn rounded  className="find"> Download </MDBBtn> */}
                            <button type="button" className="btn btn-rounded find">Read More</button>
                        </a>
                    </div>
                </div>
            </div>  
            <div className="the1000" id="intention">
                <div className="flex-center flex-column theWeddingcard ">

                    <div className="col col-lg-7 headers">
                        <h1 className="animated fadeIn mb-4 main">Our Intention</h1>
                        <img src={line1} className="lines" alt='img'/>
                        <h5 className="animated fadeIn mb-3">Spending money on experiences that leave
                            lasting emotions is becoming
                            more popular. Most couples today prefer glitzy and themed events,
                            doing extreme outdoor activities, and traveling to exotic places—the
                            things that allow them to create wonderful memories.
                        </h5>

                    </div>
                </div>
            </div>
            <div className="the200">
                <div className="flex-center flex-column">

                    <div className="col col-lg-7 headers">
                        <h1 className="animated fadeIn mb-4 main">Now that we got your attention!</h1>
                        <h5 className="animated fadeIn mb-3">See how The City Ad Mag intends to save time and increase
                            convenience.</h5>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Magazine;