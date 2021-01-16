import React from 'react';
import Menu from '../Jsondata/menu.json';
import {Link} from 'react-router-dom';
const HeaderMenu = () =>{
	return (
		<div className="menuDisplay">
		 { Menu.map (post => {
			  return(

                  <div key={post.id}>
                      <nav>
                      <ul className="headermenu">
                          <li><Link to={post.url}>{post.title}</Link></li>
                          </ul>
                          </nav>
				  </div>
				  )
		 		}

			 )} 
		</div>
		);
}

export default HeaderMenu;