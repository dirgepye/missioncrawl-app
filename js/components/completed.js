import React from 'react';
import {Link,History} from 'react-router';


var Completed = React.createClass({
    render() {
        return (
            <div className="adventure completed">
                <p className="adventure-display">Congrats! You have finished the adventure.</p>
                <Link to="/findadventure">Find new adventures</Link>
            </div>
        )
    }
})

export default Completed;