import React, {Component} from 'react';
import Logo from './images/logo.png';
import movie from './images/Landing-Page-loop-h264.mp4';
import Navigation from './Navigation';
class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <header className="site-header">
                    <img src={Logo} alt={""} />
                    <Navigation />
                </header>                
                <div className="videoWrapper">
                    <video className="video-display" loop muted autoPlay src={movie} />
                </div>
            </React.Fragment>
        );
    }
}
export default Header;
