import React from 'react';
import {Link} from 'react-router';
import Textarea from 'react-textarea-autosize';
import CreateAdventureInfo from './CreateAdventureInfo';
import CreateAdventure from './CreateAdventure';

var CreateAdventureStep = React.createClass ({
    render() {    
        return (
            <div className="create create__step">
                <h4>Step</h4>
                    <Textarea placeholder="Instructions" className="form"/>
                    <br />
                    <Textarea placeholder="Key" className="form"/>
            </div>    
        )
    }                
});

export default CreateAdventureStep;