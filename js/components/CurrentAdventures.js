import React from 'react';
import Adventure from './Adventure';

import api from '../parse/api';



var CurrentAdventures = React.createClass({
    getInitialState : function() {
        return {
            adventures: []
        }
    },
    componentDidMount : function() {

        var currentReactComponent = this;

        currentReactComponent.setState({currentUser: api.getCurrentUser()});

        api.getUserMissions().then(function(arrayOfMissions){
            currentReactComponent.setState ({
                adventures : arrayOfMissions
            })
        });
    },
    renderAdventure : function(adventureParseObject, index) {
        return <Adventure key={adventureParseObject.id} index={index} details={adventureParseObject} />
            
    },
    render: function() {
        return (
            <ul>
                {this.state.adventures.map(this.renderAdventure)}
            </ul>
        );
    }
});


export default CurrentAdventures;