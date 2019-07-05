import React from "react";
import './../styles.css';

import finger from '../img/icons/finger.png';
import scream from '../img/icons/scream.png';
import ads from '../img/icons/ads.png';
import gun from '../img/icons/gun.png';

class Publicity extends React.Component{
    render(){
        return (
            <div className="the10000" id="publicity">
                <div className="flex-center flex-column theBackground ">
                    <div className="col col-lg-7">
                        <h1 className="animated fadeIn mb-4 main">Publicity. Marketing. Advertising.</h1>
                    <h5 className="animated fadeIn mb-3">
                        The City AdMag, is a targeted, multi- layered communications package with a
                        beautiful print publication, a dynamic web presence and engaging digital
                        media platforms, which provides a platform for new and existing businesses,
                        entrepreneurs and service providers to showcase their brands.
                        We then deliver your brand in the hands and minds of a cultivated audience
                        without limits nor boundaries.</h5>
                    </div>
                    <div className="container-fluid publicity-icons">
                        <div className="row">
                            <div className="col">
                                <img className="icons3" src={scream} alt='icon'/>
                                <h5 className=""><span style={ {fontWeight: "900"}}>PUBLICITY</span></h5>
                                <p className="animated p">
                                    You don’t get a second chance to make a
                                    first impression. Being amongst thousands
                                    of products and services offered every day,
                                    the skill to influence and motivate decision-
                                    making should be strategic and deliberate.
                                    Publicity plays a major role; it must attract,
                                    intrigue, excite, inform and engage.
                                </p>
                            </div>
                            <div className="col">
                                <img className="icons3" src={ads} alt='icon'/>
                                <h5 className=""><span style={ {fontWeight: "900"}}>ADVERTISING</span></h5>
                                <p className="animated p">
                                    Your brands identity is essential to its success.
                                    We intend to support you establish and
                                    grow your brand presence - both locally and
                                    nationally. Branding will ensure you stand out
                                    from the crowd and make connections whilst
                                    appealing to the emotions of those discerning
                                    your services or products.
                                </p>
                            </div>
                            <div className="col">
                                <img className="icons3" src={finger} alt='icon'/>
                                <h5 className=""><span style={ {fontWeight: "900"}}>BRANDING</span></h5>
                                <p className="animated p">
                                    A strong brand needs a reliable and
                                    strategic marketing plan. In making your
                                    brand the personality of your business
                                    we shall strive to keep your customers
                                    informed and updated as your marketing
                                    plan is how you communicate on your
                                    services or products to the customer.
                                </p>
                            </div>
                            <div className="col">
                                <img className="icons3" src={gun} alt='icon' />
                                <h5 className=""><span style={ {fontWeight: "900"}}>MARKETING</span> </h5>
                                <p className="animated p">
                                    Advertising has the power to change
                                    perceptions and influence thoughts and
                                    feelings. Your adverts will give the brand a
                                    visual connection to emotionally resonate
                                    with your audience. Our art designers will
                                    assist you to design, craft and style your
                                    product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Publicity;