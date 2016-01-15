import React from 'react';
import api from '../parse/api';

import {Link,History} from 'react-router';

var StepDetails = React.createClass({
    mixins : [History],
    getInitialState() {
        return {
            step: null
        }
    },
    componentWillMount(){
        var currentComp = this;
        var missionId = this.props.params.missionId;
        api.userCurrentStep(missionId).then(function(stepObj){
            console.log(stepObj.get('title'));
            console.log(stepObj.get('stepOrder'));

            currentComp.setState({step:stepObj});
        })
    },
    completeStep() {
        var currentComp = this;

        api.completeStep(this.props.params.missionId).then(function(result){
            if(result==='completed'){
                currentComp.history.pushState(null, '/completed');
            }
            else {
                currentComp.setState({step:result});

                currentComp.history.pushState(null, '/currentadventures/'+currentComp.props.params.missionId);
            }
        });
    },
    render() {
        var title = this.state.step? this.state.step.get('title'): '';
        var description = this.state.step? this.state.step.get('description'):'';
        //var title = 'fsdg';
        //var description = 'dsg';

        return (
            <div className="stepdetails">
                <ul>
                    <li><p>{title}</p></li>
                    <li><p>{description}</p></li>
                </ul>
                <button onClick={this.completeStep}>Next Step</button>
            </div>
        )
    }
})

export default StepDetails;