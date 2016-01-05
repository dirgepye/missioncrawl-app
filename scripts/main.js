console.log("test");

var React = require('react');
var ReactDOM = require('react-dom');
var Textarea = require('react-textarea-autosize');


// var Router = ReactRouter.Routers;
// var Route = ReactRouter.Route;

var Crawls = React.createClass({
    render : function() {
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
    render: function() {
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

/*
    Crawl Creator
    <CrawlCreate />
*/

var CrawlCreate = React.createClass({
    render: function() {
        return (
            <div className="crawl">
                <div className="header">
                    <h1>Welcome</h1>
                    <h3>Start your adventure here!</h3>
                </div>
                <div className="create__step">
                    <h1>Step One!</h1>
                    <Textarea/>
                    <a href="#">Add a step...</a>
                    <button>Add</button>
                </div>
            </div>
        );
    }
});

// var routes = (
//   <Router>
//     <Route path="/crawl-creator.html" component={CrawlCreate}/>
//   </Router>
// );

ReactDOM.render(<CrawlCreate />, document.querySelector('#main'));