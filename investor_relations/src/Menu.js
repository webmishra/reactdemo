import React, { Component } from "react";
import './bootstrap.min.css';
import './style-sheet.css';

class Item extends Component {
  menulinks = {
    //mainlinks: ["Corporate Information", "Stock Information", "SEC Filings", "News & Market Information", "Financials"]
  };
 
  render() {
    return (
      <React.Fragment>
	      <header>
	      	<nav>
	      		<ul className="list-group">
		          {this.menulinks.mainlinks.map(listitem => (
		            <li key={listitem}>
		              {listitem}
		            </li>
		          ))}
		        </ul>
	      	</nav>
	      </header>
      </React.Fragment>
    );
  }
}
 
export default Item;
