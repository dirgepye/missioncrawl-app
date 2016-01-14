import React from 'react';
import Adventure from './Adventure';
import AdventureSteps from './AdventureSteps';
import Adventures from './Adventures';

import api from '../parse/api';

var InProgressAdventure = React.createClass ({
    getInitialState(){
        return {
            mission: {
                id: 123,
                title: 'Old Port Crawl',
                description: 'fjkewjfker jfkwej fwe'
            },
            steps: [
                {
                    location: {lat: 45, lng: -83},
                    title: 'Go visit decodemtl'
                },
                {
                    location: {lat: 48, lng: -50},
                    title: 'Go travel'
                }
            ],
            currentStep: 1
        }
    },
    componentDidMount() {
        var currentComp = this;
        
        api.listStepsOfMission(this.props.details.id).then(function(result) {
            currentComp.setState({steps: result})
        })
    },
    renderSteps : function(ParesSteps, index){
        
        return (<li>{this.title}l</li>)
        
    },
    render() {
        var title = this.state.mission.title
        var description = this.state.mission.description
        var location = this.state.mission.location
        //var categories = this.props.details.categories;
        
        return (
            <div className="adventure">
                <div className="adventure__details">
                    <div className="adventure-display">
                        <h2 className="adventure__title">{title},</h2>
                        <p className="adventure__description">{description}</p>
                        <div className="adventure-category">
                            <ul>
                                <li><a href="#">category</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="adventure-display">
                        
                    </div>
                    {//<AdventureSteps adventureId={this.props.details.id}/>
                    }
                    <ul>
                        {this.state.steps.map(this.renderSteps)}
                    </ul>
                    <div className="adventure__button">
                        <button>More Info</button>
                        <button>Start!</button>
                    </div>  
                </div>
            </div>
        );
    }
})

export default InProgressAdventure;

