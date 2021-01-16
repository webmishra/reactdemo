import React from 'react';
import MenuLink from './Jsondata/menu.json';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menudisplay">
            <nav>
                <ul>
                    {MenuLink.map(post => {
                            return (
                            <li key={post.id}><Link to={post.url}>{post.title}</Link></li>
                            )
                        }

                    )}
            </ul>
        </nav>
     </div>
    );
}
export default Menu;