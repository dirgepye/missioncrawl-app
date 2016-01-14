import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';
import AdventuresList from './Adventures'

var AdventureDetails = React.createClass ({
   render() {
       return (
            <div>
                <div className="adventure">
                    <div className="adventure__details">
                    
                        
                        <div className="adventure-display">
                            <h2 className="adventure__title">Title here</h2>
                            <p className="adventure__description">Placeholder dfadsagsd escription</p>
                            <div className="adventure-category">
                                <ul>
                                    <li><a href="#">fun, fun, fun!!!</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        
                    </div>    
                    
                    
                    <div className="adventure__steps">
                        <ol>
                            <li className="complete">fafdssdfa</li>
                            <li className="current">dsafsdfasdfds</li>
                            <li className="hidden">fdsafdsfadsfsd</li>
                            <li className="hidden">fdsafdsfsa</li>
                        </ol>
                        <img src="http://placecorgi.com/450/450" />
                        
                    </div>
                    <button>More Info</button>
                    <button>Start</button>
                </div>
            </div>
        );
    } 
});

export default AdventureDetails;