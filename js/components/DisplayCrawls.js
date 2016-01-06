import React from 'react';

var Crawls = React.createClass({
    render() {
        return (
            <div className="crawl">
                <div className="crawl__step">
                    
                    <div className="crawl-display">
                        <h2 className="crawl__title">Title</h2>
                        <p className="crawl__description">Mauris finibus leo id cursus laoreet. Phasellus 
                        bibendum eros mi, ut porttitor dui venenatis ut. 
                        Mauris ut risus fermentum, finibus eros sit amet, 
                        convallis quam</p>
                        <div className="crawl-category">
                            <ul>
                                <li><a href="#">Fun</a></li>
                                <li><a href="#">Adventure</a></li> 
                                <li><a href="#">Food</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

/*
    Display Crawls
    <DisplayCrawls />
*/

var DisplayCrawls = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Adventures</h1>
                    <h3>Select to start!</h3>
                </div>
                <Crawls />
            <button></button>
            <button></button>
            </div>
        );
    }
});

export default DisplayCrawls;