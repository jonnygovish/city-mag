import React from "react";
import './../styles.css';

import stock from '../img/icons/stock.png';
import briefcase from '../img/icons/briefcase.png';
import heart from '../img/icons/heart.png';
import medal from '../img/icons/medal.png';

class WhatsInForYou extends React.Component{
    render(){
        return(
            <div style={{height: "auto"}}>
                <div className="flex-center flex-column theBlackCitySide">
                    <div className="container-fluid">
                        <h1 className="main">What's in for you?</h1>
                        <div className="row">
                            <div className="col-md-6 offset-sm-3">
                                <p>The best way to CREATE AUTHORITY in your space or market place and have people
                                    do business with you is to demonstrate how good you are as opposed to the
                                    traditional ways of gaining trust.
                                    Meaningful content remains immensely popular, and is highly desired by couples
                                    looking for exclusive services and products. The City AdMag - is where we shall thrive
                                    and promote your services and products as well as:</p>
                                <div className="row">
                                    <div className="col-sm">
                                        <img src={stock} className="icons2" alt='stock' />
                                        <h6 className="animated">Marketing high
                                            end services</h6>
                                    </div>
                                    <div className="col-sm">
                                        <img src={briefcase} className="icons2" alt='stock'/>
                                        <h6 className="animated">Generating leads
                                            for business
                                            ( cut out niche)</h6>
                                    </div>
                                    <div className="col-sm">
                                        <img src={heart} className="icons2" alt='stock'/>
                                        <h6 className="animated">Build relationships
                                            for referrals & position
                                            you as a trusted
                                            authority</h6>
                                    </div>
                                    <div className="col-sm">
                                        <img src={medal} className="icons2" alt='stock'/>
                                        <h6 className="animated">Sharing experiences
                                            & success stories
                                            for repeat business</h6>

                                    </div>
                                    <h6>Whilst we incorporate publicity to grow awareness of your services and products your brand
                                        will essentially be targeting the discerning upper and middle class clients who
                                        not necessarily bargain but look for quality</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WhatsInForYou;