import React from 'react';
import {Link,History} from 'react-router';


var Navbar = React.createClass ({
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link to="/findadventure">Find Adventures</Link></li>
                    <li><Link to="/currentadventure">In Progress</Link></li>
                    <li><Link to="/completedadventures">Completed Adventures</Link></li>
                    <li><Link to="/newadventure">Create Adventures</Link></li>
                </ul>
            </div>
        );
    }
});


export default Navbar;






