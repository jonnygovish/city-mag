import React from "react";
import './../styles.css';

import house from '../img/icons/house-icon.png';
import camera from '../img/icons/camera-icon.png';
import print from '../img/icons/print-icon.png';
import tick from '../img/icons/tick.png';
import Gaugeup from '../img/icons/Gaugeup.png';
import shoot from '../img/icons/shoot.png';
import pinpoint from '../img/icons/pinpoint.png';

class Icons extends React.Component{
    render(){
        return (

            <div style={{height: "auto"}}>
                <div className="flex-center flex-column theBlackSide">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <img src={house} className="icons" alt='icon'/>
                                <h6>PERFORMANCE MARKETING</h6>
                                <p className="animated">We merge Advertising and PR tracing
                                    a pathway to purchase (inter)actions.
                                    Adoption of brand keyword searches
                                    for SEO optimizers and performance
                                    marketers to pounce upon your brand</p>
                            </div>
                            <div className="col-sm">
                                <img src={camera} className="icons" alt='icon'/>
                                <h6>EXPOSURE</h6>
                                <p className="animated">Expose customers to whom they
                                    should engage for
                                    business/services. Paid
                                    placements also provide more
                                    control over the content and
                                    the timing of the message.</p>
                            </div>
                            <div className="col-sm">
                                <img src={print} className="icons" alt='icon'/>
                                <h6>DATA & PRINT</h6>
                                <p className="animated">Two polar opposite directions. An
                                    increase in the data driven race has
                                    also provided an option for many to
                                    return to analog or print options to
                                    cut through the digital noise.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <img src={tick} className="icons" alt='icon'/>
                                <h6>FRAGMENTATION OF INFLUENCE</h6>
                                <p className="animated">someone with deep influence
                                    over 100 people has more value
                                    than someone with superficial
                                    influence over 10,000 people.
                                    Measurable option on brand
                                    engagement e.g. use of voucher
                                    codes to be redeemed in store.</p>
                            </div>
                            <div className="col-sm">
                                <img src={Gaugeup} className="icons" alt='icon'/>
                                <h6>PROVIDES A CONTENT
                                    MARKET NICHE</h6>
                                <p className="animated">A centralized place that nets
                                    more devoted readers, more
                                    qualified leads, higher
                                    conversion rates and the
                                    greater possibility of exposing
                                    your brand</p>
                            </div>
                            <div className="col-sm">
                                <img src={shoot} className="icons" alt='icons'/>
                                <h6>AUDIENCE BUILDING</h6>
                                <p className="animated">Committed to publicity that
                                    will attract building an
                                    audience.</p>
                            </div>
                            <div className="col-sm">
                                <img src={pinpoint} className="icons" alt='icon'/>
                                <h6>FOCUS ON MESSAGE ATTRIBUTION</h6>
                                <p className="animated">customized brand messages will
                                    ensure they are hyper-targeted
                                    and unique to gain traction and
                                    engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Icons;