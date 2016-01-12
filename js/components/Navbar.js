import React from 'react';
import {Link,History} from 'react-router';
 
import reactMixin from 'react-mixin';





var Navbar = React.createClass ({
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link to="/findadventure">Find Adventures</Link></li>
                    <li><Link to="/findadventure">In Progress</Link></li>
                    <li><Link to="/findadventure">Completed Adventures</Link></li>
                    <li><Link to="/findadventure">Create Adventures</Link></li>
                </ul>
            </div>
        );
    }
});


export default Navbar;






