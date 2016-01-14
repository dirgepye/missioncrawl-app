import React from 'react';
import samples from '../adventures';
import AdventureSteps from './AdventureSteps';
import api from '../parse/api';

var Adventure = React.createClass({
    getInitialState(){
        return {
            steps: []
        }
    },
    componentDidMount() {
        var currentComp = this;
        
        api.listStepsOfMission(this.props.details.id).then(function(result) {
            currentComp.setState({steps: result})
        })
    },
    subscribeTo() {
        api.subscribeToMission(this.props.details.id);
    },
    renderFirstStep() {
        api.getFirstStep(this.props.details).then(function(step){
            //return <Adventure key={step.id} details={step} />
        });
    },
    render() {
        var title = this.props.details.get('title');
        var description = this.props.details.get('description');
        var location = this.props.details.get('Location');
        // var categories = this.props.details.categories;
        
        return (
            <div className="adventure">
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
                <ul>
                    {this.renderFirstStep}
                </ul>
                <div className="adventure__button">
                    <button onClick={this.subscribeTo}>Start the adventure!</button>
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