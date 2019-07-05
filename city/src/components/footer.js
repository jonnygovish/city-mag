import React from "react";
import './../styles.css';
import { MDBInput , MDBBtn} from "mdbreact";
import axios from 'axios';

const initialState = {
    email: '',
    firstName: '',
    Comment: '',
    phoneNumber: ''
}

class Footer extends React.Component{
    constructor(){
        super()

        this.state = initialState;

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

     async handleSubmit(e){
        e.preventDefault()

        const { email, firstName, Comment, phoneNumber } = this.state;

        axios.post('/api/form', {
            email,
            firstName,
            Comment,
            phoneNumber
        });
        this.setState(initialState);
    }
    render() {
        return (
            <div style={{height: "auto;"}}>
                <div className="flex-center flex-column footer " id="contact" >
                    <h1 className="animated fadeIn mt-5 pt-5 mb-4 main" >Lets start the conversation </h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className= "col-md-12">
                                <div className= "col-6 offset-3">
                                    < h2 > Contact us </h2>
                                    < div className = "indicates-required" > < span className = "asterisk" > * </span> indicates required</div>
                                    <form onSubmit={this.handleSubmit} >
                                        <div className="form-group">
                                            <MDBInput label="Email Address*" size="lg" name="email" value={this.state['email']} onChange={this.handleChange} />
                                            <MDBInput label="First Name" size="lg" value={this.state['firstName']} onChange={this.handleChange} name="firstName" />
                                            <MDBInput label="Comment" size="lg" value={this.state['Comment']} name="Comment" onChange={this.handleChange} />
                                            <MDBInput label="Phone Number" size="lg" hint="07********" value={this.state['phoneNumber']} name="phoneNumber" onChange={this.handleChange} />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="success" type='submit' >
                                                Subscribe
                                            </MDBBtn>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="col-md-12 mya">
                                <ul className="you">
                                    <li className="yo"><p>info@thecityadmag.com</p></li>
                                    <li className="yo"><p>(+254)700 871 480</p></li>
                                </ul>

                            </div>

                            <div className="col-md-8">
                                <ul className="me">
                                    <li className="me1"><a href="#">FAQ's Terms of use</a></li>
                                    <li className="me1"><a href="#">PrivacyCommunity Guidelines</a></li>
                                    <li className="me1"><a href="#">Contact us</a></li>
                                    <li className="me1"><a href={"#"}>Placing Ads How it works</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="social-icons">
                                    < li className = "mySocial" > < a href = "https://www.facebook.com/CityAdMag/" > < i className = "fa fa-facebook" > </i></a > </li>
                                    <li className="mySocial"><a href="https://twitter.com/CityAdmag"><i className="fa fa-twitter"></i></a></li>
                                    <li className="mySocial"><i className="fa fa-instagram"></i></li>
                                    <li className="mySocial"><i className="fa fa-pinterest"></i></li>
                                    <li className="mySocial"><i className="fa fa-youtube"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;