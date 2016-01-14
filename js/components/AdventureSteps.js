import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';
import Adventures from './Adventures';
import api from '../parse/api';
import Step from './Step';



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
    render() {
        return (
            <div className="adventure__details">
                <div className="adventure__steps">
                
                    <ol>
                        {this.state.steps.map(function(stepParseObject, index) {
                            return <Step key={stepParseObject.id} index={index} details={stepParseObject} />
                        })}
                    </ol>
                    <img src="http://placecorgi.com/450/450" />
                </div>
            </div>
        );
    }
});


export default AdventureSteps;


//


// <div className="adventure__steps">
//                         <ol>
//                             <li className="complete">fafdssdfa</li>
//                             <li className="current">dsafsdfasdfds</li>
//                             <li className="hidden">fdsafdsfadsfsd</li>
//                             <li className="hidden">fdsafdsfsa</li>
//                         </ol>
//                         <img src="http://placecorgi.com/450/450" />
                        
//                     </div>