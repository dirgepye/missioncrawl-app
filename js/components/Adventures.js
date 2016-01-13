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
            currentComp.setState({adventures:result}) 
                
            
        })
        
    },
   
    renderAdventure : function(adventure,index) {
        return <Adventure key={index} index={index} details={this.state.adventures[index]} />
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