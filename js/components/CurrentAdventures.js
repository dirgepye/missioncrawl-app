import React from 'react';
import Adventure from './Adventure';




var CurrentAdventures = React.createClass({
    getInitialState : function() {
        return {
            adventures : []

    },
    componentDidMount : function () {
        
        var currentReactComponent = this;

        api.getUserMissions().then(function(arrayOfMissions){
            currentReactComponent.setState ({
                adventures : arrayOfMissions
            })
        });
    },
    renderAdventure : function(adventureParseObject) {
        return <Adventure key={adventureId} index={adventureId} details={this.state.adventures[adventureId]} />
            
    },
    
    render: function() {
        return (
            
            <ul>
                {
                    ///Object.keys(this.state.adventures).map(this.renderAdventure)

                    this.state.adventures.map(this.renderAdventure);
                }
            </ul>
        );
    }
});


export default AdventuresList;