import React, { Component } from 'react';
import data from "./menu.json";

const investorMenu = data.d.GetMenu.Sections.results;
const items = [];
for (var i = 0; i < investorMenu.length; i++)
{
    items.push(<li key={data.d.GetMenu.Sections.results[i].Parent.KeyPage}>
        <a className="ir-link" href={data.d.GetMenu.Sections.results[i].Parent.Href}>{data.d.GetMenu.Sections.results[i].Parent.Description}</a>
    </li>)
}

class Navigation extends Component {

    render() {
        return (
            <React.Fragment>               
                    <nav>
                        <ul className="investor-links">
                           {items}
                        </ul>
                    </nav>
            </React.Fragment>
        );
    }
}
export default Navigation;