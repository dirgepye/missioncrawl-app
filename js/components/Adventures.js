import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';
import api from '../parse/api';



var AdventuresList = React.createClass({
    getInitialState : function() {
        return {
            adventures : []
        }
    },
    componentDidMount : function () {
        var currentComp = this;
        
        api.getMissionList().then(function(result){
            console.log(result);
            currentComp.setState({adventures:result}) 
        
        })
        
    },
    renderAdventure : function(adventureParseObject, index) {
        return <Adventure key={adventureParseObject.id} index={index} details={adventureParseObject} context="unsubscribed"/>
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