import React from 'react';
import FullPageIntroWithFixedTransparentNavbar from './components/nav';
import Publicity from './components/publicity';
import Magazine from './components/magazine';
import Icons from './components/icons';
import HowItsDone from './components/howitsdone';
import WhatsInForYou from './components/whatsinforyou';
import Creativity from './components/creativity';
import Footer from './components/footer';
import OurStory from './components/ourstory';
import './index.css';

// function App() {
//   return (
  //   );
  // }
  class App extends React.Component{
    
    constructor(props){
      super(props);
      this.main = React.createRef();
    }

    render(){
      return(
        <div>

        < FullPageIntroWithFixedTransparentNavbar />
        
        <Publicity /> 
        <Magazine /> 
        <Icons />
        <HowItsDone />
        <WhatsInForYou />
        <OurStory />
        <Creativity />
        <Footer />
        </div>
       
    );
  }
}
export default App;
