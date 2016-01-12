import React from 'react';
import Adventures from './Adventures';


//map results within 'results' div
var FindAdventure = React.createClass({
    render() {
        return (
            <div>
                <div className="adventure">
                Title
                <input className="form" type="text" placeholder="search now!" />
                Category
                <br />
                <select className="adventure-categories">
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Art">Art</option>
                    <option value="Culture">Cultures</option>
                </select>
                <a href="#" className="adventure-categories__add">Add category</a>
                </div>
                
                <div className="adventure results" >
                    <Adventures />
                </div>    
                <button>Search</button>
            </div>
        );    
    }
});

var SearchResult = React.createClass({
    render() {
        return(
            <div className="" />
        )
    }
})

export default FindAdventure;