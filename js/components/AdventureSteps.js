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
        
        api.listStepsOfMission(this.props.adventureId).then(function(result){
            currentComp.setState({steps:result})
            console.log(result)
        })
        
    },
    renderSteps : function(stepParseObject, index) {
        return <Adventure key={stepParseObject.id} index={index} details={stepParseObject} />
    },
    
    render() {
        return (
            <div>
                <p>test test test</p>
                <ul>
                    {this.state.steps.map(this.renderSteps)}
                </ul>
            </div>
        );
    }
});


export default AdventureSteps;


