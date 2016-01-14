import React from 'react';
import {Link} from 'react-router';
import Textarea from 'react-textarea-autosize';
import CreateAdventure from './CreateAdventure';
import CreateAdventureStep from './CreateAdventureStep';

var CreateAdventureInfo = React.createClass ({
    render() {
        return (
            <div>
                <div className="create create__basics">
                    Title
                    <br />
                    <input type="text" placeholder="title" className="form"/>
                    <br />
                    Description
                    <br /> 
                    <Textarea rows="3" className="form" />
                    <br />
                    Categories
                    <br />
                    <input type="test" placeholder="Fun, Educational, Food..." className="form"/>
                    <span>Add category</span>
                </div>
                <div>
                    <CreateAdventureStep />
                    <button className="buttons" onClick={this.addStep}>Add Step</button>
                </div>
            </div>
        )
    }
})


export default CreateAdventureInfo