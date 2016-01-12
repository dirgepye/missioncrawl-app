import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';



var AdventuresList = React.createClass({
    getInitialState : function() {
        return {
            adventures : {}
        }
    },
    componentDidMount : function () {
        
        var Mission = Parse.Object.extend("Mission");
        var query = new Parse.Query(Mission);
        
        var currentComp = this;
        
        query.find().then(function(missions){
            currentComp.setState ({
                adventures : missions
            })
            
            console.log(missions[0]);
        });
    },
    renderAdventure : function(adventureId) {
        return <Adventure key={adventureId} index={adventureId} details={this.state.adventures[adventureId]} />
            
    },
    
    render() {
        return (
            
            <ul>
                {Object.keys(this.state.adventures).map(this.renderAdventure)}
            </ul>
        );
    }
});


export default AdventuresList;