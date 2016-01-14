import React from 'react';
import {Link} from 'react-router';
import Textarea from 'react-textarea-autosize';
import CreateAdventureInfo from './CreateAdventureInfo';
import CreateAdventureStep from './CreateAdventureStep';

var CreateAdventure = React.createClass({
    render() {
        return (
            <div className="container">
                <form>
                    <CreateAdventureInfo/>
                    
                </form>  
            </div>
        );
    }
});

export default CreateAdventure;



// <div className="create create__basics">
//                         Title
//                         <br />
//                         <input type="text" placeholder="title" className="form"/>
//                         <br />
//                         Description
//                         <br /> 
//                         <Textarea className="form" />
//                         <br />
//                         Categories
//                         <br />
//                         <input type="test" placeholder="Fun, Educational, Food..." className="form"/>
//                         <span>Add category</span>
//                     </div>
//                     <div className="create create__step">
//                         <h4>Step</h4>
//                         <Textarea placeholder="Instructions" className="form"/>
//                         <br />
//                         <Textarea placeholder="Key" className="form"/>
//                         <br />
//                         <button className="buttons" onClick={this.addStep}>Add Step</button>
//                     </div>