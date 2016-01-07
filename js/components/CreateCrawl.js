import React from 'react';
import {Link} from 'react-router';
import Textarea from 'react-textarea-autosize';

var CreateCrawl = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Create an Adventure!</h1>
                    <h3>Fill out the information below!</h3>
                </div>
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
                    </div>
                    <div className="create create__step">
                        <Textarea placeholder="Instructions" className="form"/>
                        <br />
                        <Textarea placeholder="Key" className="form"/>
                        <br />
                    </div>
                    <button className="buttons">Add Step</button>
                </form>  
            </div>
        );
    }
});

export default CreateCrawl;