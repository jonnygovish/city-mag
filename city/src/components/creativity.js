import React from "react";
import './../styles.css';

class Creativity extends React.Component{
    render(){
        return(
            <div>

                <div className="the100">
                    <div className="flex-center flex-column creativity">
                        <h1 className="animated fadeIn mb-4 main">Creativity</h1>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 offset-3 createe">
                                    <h4 className="create myFont">
                                        "
                                        You will be going to be on journey longer
                                        that you will be at the destination
                                        ... so enjoy the journey."
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "50vh"}}>
                    <div className="flex-center flex-column myText">

                        <div className="col col-md-8 ">
                            <h5 className="animated fadeIn mb-3">We have probably become more creative (compared to others) in ensuring that you will
                                be more visible with less effort as well as save you on unnecessary expenses. Our aim
                                is to ensure opening more opportunities from your existing ones. The digital
                                opportunities as added value will attract business from prospective clients and will give
                                brands the flexibility to tell their story and showcase what’s new in the market.
                                Our creative ideas will be centered on your brand journey and its exposure to the
                                discerning and needful client or business match maker.</h5>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Creativity;