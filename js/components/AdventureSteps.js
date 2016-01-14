import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';
import Adventures from './Adventures';
import api from '../parse/api';



var AdventureSteps = React.createClass({
    getInitialState : function() {
        return {
            steps: []
        }
    },
    componentDidMount : function () {
        var currentComp = this;
        
        api.getMissionList().then(function(result){
            currentComp.setState({steps:result}) 
        
            
        })
        
    },
    renderAdventure : function(adventureParseObject, index) {
        return <Adventure key={adventureParseObject.id} index={index} details={adventureParseObject} />
    },
    
    render() {
        return (
            <div>
                <p>fdsahgdahah</p>
                <ul>
                    {this.state.adventures.map(this.renderAdventure)}
                </ul>
            </div>
        );
    }
});


export default AdventureSteps;