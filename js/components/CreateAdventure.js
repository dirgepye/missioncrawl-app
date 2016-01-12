import React from 'react';
import {Link} from 'react-router';
import Textarea from 'react-textarea-autosize';

var CreateAdventure = React.createClass({
    render() {
        return (
            <div className="container">
                <form>
                    <div className="create create__basics">
                        Title
                        <br />
                        <input type="text" placeholder="title" className="form"/>
                        <br />
                        Description
                        <br /> 
                        <Textarea className="form" />
                        <br />
                        Categories
                        <br />
                        <input type="test" placeholder="Fun, Educational, Food..." className="form"/>
                        <span>Add category</span>
                    </div>
                    <div className="create create__step">
                        <h4>Step</h4>
                        <Textarea placeholder="Instructions" className="form"/>
                        <br />
                        <Textarea placeholder="Key" className="form"/>
                        <br />
                        <button className="buttons">Add Step</button>
                    </div>
                    
                </form>  
            </div>
        );
    }
});

export default CreateAdventure;