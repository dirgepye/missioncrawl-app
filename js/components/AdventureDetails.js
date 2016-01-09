import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';

var AdventureDetails = React.createClass ({
   render() {
       return (
            <div className="container">
                <div className="crawl">
                    <div className="crawl__details">
                    
                        <div className="crawl-display">
                            <h2 className="crawl__title">Title here</h2>
                            <p className="crawl__description">Placeholder description</p>
                            <div className="crawl-category">
                                <ul>
                                    <li><a href="#">fun, fun, fun!!!</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="crawl__steps">
                        <ol>
                            <li className="complete">fafdssdfa</li>
                            <li className="current">dsafsdfasdfds</li>
                            <li className="hidden">fdsafdsfadsfsd</li>
                            <li className="hidden">fdsafdsfsa</li>
                        </ol>    
                    </div>
                    <div className="crawl__map">
                        
                    </div>
                </div>
            </div>
        );
    } 
});

export default AdventureDetails;