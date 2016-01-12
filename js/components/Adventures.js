import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';
import api from '../parse/api';



var AdventuresList = React.createClass({
    getInitialState : function() {
        return {
            adventures : {}
        }
    },
    componentDidMount : function () {
        var currentComp = this;
        
    },
    renderAdventure : function(adventureId) {
        return <Adventure key={adventureId} index={adventureId} details={this.state.adventures[adventureId]} />
            
    },
    
    render() {
        return (
            
            <ul>
                {Object.keys(this.state.adventures).map(this.renderAdventure)}
                <p>Placeholder</p>
            </ul>
        );
    }
});


export default AdventuresList;