import React, { Component } from 'react';
import CompanyInfo from './CompanyInfo';
import Event from './Event';

class Content extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="content-box">
                    <div className="container"><br />
                        <div className="banner-bg"></div>
                        <CompanyInfo />
                        <Event/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Content;