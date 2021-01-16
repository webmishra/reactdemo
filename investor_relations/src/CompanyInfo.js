import React, { Component } from 'react';
import companyinfo from "./companyinfo.json";
const getCompanydesc = companyinfo.d;

class CompanyInfo extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 className="title">Company Description</h1>
               <div dangerouslySetInnerHTML={{ __html: getCompanydesc.GetCompanyInfo.CompanyDescription }} />
            </React.Fragment>
        );
    }
}
export default CompanyInfo;