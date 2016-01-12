import React from 'react';


// var DisplayButton = React.createClass({
//     render() {
//         return (
//             <button onClick={this.props.DisplayCrawls}>Show Adventures</button>
//         );
//     }
// });

//  loadSamples : function() {
//     this.setState({
//       fishes : require('./sample-fishes')
//     });
//   },



var Adventures = React.createClass({
    render() {
        return (
            <div className="adventure">
                <div className="adventure__step">
                    
                    <div className="adventure-display">
                        <h2 className="adventure__title">Title</h2>
                        <p className="adventure__description">Mauris finibus leo id cursus laoreet. Phasellus 
                        bibendum eros mi, ut porttitor dui venenatis ut. 
                        Mauris ut risus fermentum, finibus eros sit amet, 
                        convallis quam</p>
                        <div className="adventure-category">
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

var DisplayAdventures = React.createClass({
    getInitialState : function() {
    return {
      adventures : {}
        };
    },
    loadAdventure : function() {
        this.setState({
            adventures : require('../adventures')
            
        });
        console.log(this.setState);
    },
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Adventures</h1>
                    <h3>Select to start!</h3>
                </div>
                <Adventures />
            <button>Next</button>
            <button>Previous</button>
            </div>
        );
    }
    
});

export default DisplayAdventures;