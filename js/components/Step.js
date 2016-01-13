import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';
import api from '../parse/api';



var AdventuresSteps = React.createClass({
    getInitialState : function() {
        return {
            adventures : []
        }
    },
    componentDidMount : function () {
        var currentComp = this;
        
        api.getMissionList().then(function(result){
            currentComp.setState({adventures:result}) 
        
            
        })
        
    },
    renderAdventure : function(adventureParseObject, index) {
        return <Adventure key={adventureParseObject.id} index={index} details={adventureParseObject} />
    },
    
    render() {
        return (
        
            <ul>
                {this.state.adventures.map(this.renderAdventure)}
            </ul>
        );
    }
});


export default AdventuresList;