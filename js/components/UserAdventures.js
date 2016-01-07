import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';

var UserAdventures = React.createClass({
    getInitialState : function() {
        return {
            adventures : {}
        }
    },
    componentDidMount : function () {
        this.setState ({
            adventures : samples
        })
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


export default UserAdventures;