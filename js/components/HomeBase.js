import React from 'react';
import {Link,History} from 'react-router';
 
import reactMixin from 'react-mixin';
import Parse from 'parse';

import api from '../parse/api-parse';

var Navbar = React.createClass ({
    render() {
        return (
            <div>
                <ul>
                    <li>Find Adventures</li>
                    <li>In Progress</li>
                    <li>Completed Adventures</li>
                    <li>Create Adventures</li>
                </ul>
            </div>
        );
    }
});

export default Navbar;