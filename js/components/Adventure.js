import React from 'react';





var Adventure = React.createClass({
    render() {
        var title = this.props.details.title;
        var description = this.props.details.description;
        var categories = this.props.details.categories;
        
        return (
            <li className="crawl">
                <div className="crawl__step">
                    
                    <div className="crawl-display">
                        <h2 className="crawl__title">{title}</h2>
                        <p className="crawl__description">{description}</p>
                        <div className="crawl-category">
                            <ul>
                                <li><a href="#">{categories}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
});

export default Adventure;