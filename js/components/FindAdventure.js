import React from 'react';

var FindAdventure = React.createClass({
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="search now!" />
                <div className="search results" />
            </div>
        );    
    }
});

export default FindAdventure;