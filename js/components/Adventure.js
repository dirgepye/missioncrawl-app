import React from 'react';
import AdventureSteps from './AdventureSteps';
import api from '../parse/api';

import {Link,History} from 'react-router';

var Adventure = React.createClass({
    mixins : [History],
    getInitialState(){
        return {
            text:'Start the adventure!'
        }
    },
    componentDidMount(){
        if (this.props.context ==='current') {
            this.setState({text:"Continue"});
        }
        else if (this.props.context ==='completed'){
            this.setState({text:"Completed"});
        }
    },
    subscribeTo() {
        var currentComp = this;

        if (this.props.context ==='current') {
            this.history.pushState(null, '/currentadventures/'+this.props.details.id);
        }
        else {
            api.subscribeToMission(this.props.details.id).then(function(res){
                currentComp.history.pushState(null, '/currentadventures/'+currentComp.props.details.id);
            });
        }
    },
    render() {
        var title = this.props.details.get('title');
        var description = this.props.details.get('description');
        var location = this.props.details.get('Location');
        //var categories = this.props.details.categories;
        
        return (
            <div className="rendered2">
                <div className="adventure-display">
                    <h2 className="adventure__title">{title},</h2>
                    <p className="adventure__description">{description}</p>
                    <div className="adventure-category">
                        <ul>
                            <li><a href="#">category</a></li>
                        </ul>
                    </div>    
                </div>
                <AdventureSteps adventure={this.props.details} context={this.props.context}/>
                <div>
                    <div className="adventure__button">
                        <button onClick={this.subscribeTo}>{this.state.text}</button>
                    </div>
                </div>
            </div>
        );
    }
});

// var Adventure = React.createClass({
//     render() {
//         var title = this.props.details.title;
//         var description = this.props.details.description;
//         var categories = this.props.details.categories;
        
//         return (
//             <li className="crawl">
//                 <div className="crawl__step">
//                     <div className="crawl-display">
//                         <h2 className="crawl__title">{title}</h2>
//                         <p className="crawl__description">{description}</p>
//                         <div className="crawl-category">
//                             <ul>
//                                 <li><a href="#">{categories}</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//         );
//     }
// });

export default Adventure;