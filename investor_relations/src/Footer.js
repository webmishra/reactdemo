import React, { Component } from 'react';
import Fblogo from './images/facebook.svg';
import Twitterlogo from './images/Twitter.svg';
import Linkedinlogo from './images/linkedin.svg';
import Bloglogo from './images/blog2x.svg';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="footersection u-container">
                        <div className="pull-left">
                            <ul className="links">
                                <li><p>About Unum Group:</p></li>
                                <li><a href="https://www.unum.com" title="Unum US">Unum US</a></li>
                                <li><a href="https://www.unum.co.uk" title="Unum UK">Unum UK</a></li>
                                <li><a href="https://www.coloniallife.com" title="Colonial Life">Colonial Life</a></li>
                                <li><a href="https://www.unum.com/careers" title="Careers at Unum">Careers at Unum</a></li>
                            </ul>
                        </div>
                        <div className="pull-right">
                            <ul className="social">
                                <li><a href="http://facebook.com/unumbenefits" title="facebook"><img src={Fblogo} alt="facebook" /></a></li>
                                <li><a href="http://linkedin.com/company/unum" title="Linkedin"><img src={Linkedinlogo} alt="Linkedin" /></a></li>
                                <li><a href="https://twitter.com/unumnews" title="Twitter"><img src={Twitterlogo} alt="Twitter" /></a></li>
                                <li><a href="http://workwell.unum.com/" title="blog"><img src={Bloglogo} alt="blog" /></a></li>
                            </ul>
                        </div>
                    </div>
                   
                </footer>
                <div className="copyrightouter u-container">
                    <div className="irwCopyright">
                        &copy; 2019 Unum Group. All rights reserved.| <a href="https://www.unum.com/legal" title="Legal">Legal</a> | <a href="https://www.unum.com/privacy" title="Privacy">Privacy</a> | <a href="https://www.unum.com/hello/accessibility-for-all" title="Accessibility">Accessibility</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;