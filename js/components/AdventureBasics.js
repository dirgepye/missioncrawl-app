import React from 'react';
import api from '../parse/api';

var AdventureBasics = React.createClass ({
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
    render() {
        var title = this.props.details.get('title');
        var description = this.props.details.get('description');
        var location = this.props.details.get('Location');
    render() {
        return (
            <div className="adventure-display">
                <h2 className="adventure__title">{title},</h2>
                <p className="adventure__description">{description}</p>
                <div className="adventure-category">
                    <ul>
                        <li><a href="#">category</a></li>
                    </ul>
                </div>
            </div>
        )
    }
})

export default AdventureBasics