import React from 'react';
import Textarea from 'react-textarea-autosize';

import api from '../parse/api';

var CompleteAdventures = React.createClass ({
    getInitialState : function() {
        return {
            adventures: []
        }
    },
    componentDidMount : function() {

        var currentReactComponent = this;

        api.getCompletedMissions().then(function(arrayOfMissions){
            arrayOfMissions.filter(function(sub) {
                return getNextStep(sub.get('mission'),sub.get('step'));
            }).map(function(sub){
                return sub.get('mission');
            });
            currentReactComponent.setState ({
                adventures : arrayOfMissions
            })
        });
    },
    renderAdventure : function(adventureParseObject, index) {
        return <Adventure key={adventureParseObject.id} index={index} details={adventureParseObject} context="current"/>
    },
    render: function() {
        return (
            <ul>
                {this.state.adventures.map(this.renderAdventure)}
            </ul>
        );
    }
});

export default CompleteAdventures;
