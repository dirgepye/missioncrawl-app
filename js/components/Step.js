import React from 'react';
import AdventureSteps from './AdventureSteps';


var Step = React.createClass({
    render() {
        var title = this.props.details.get('title');
        var description = this.props.details.get('description');
        var location = this.props.details.get('Location');
        
        return (
            <li><p>{title}</p></li>
        )
    }
})

export default Step;