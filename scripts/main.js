

console.log("test");

var React = require('react');
var ReactDOM = require('react-dom');
var Textarea = require('react-textarea-autosize'); 


// var Router = ReactRouter.Routers;
// var Route = ReactRouter.Route;

/*
    Crawls
    <Crawls />
*/

var Crawls = React.createClass({
    render : function() {
        return (
            <div className="create">
                <p>Crawls</p>
            </div>
        );
    }
});

/*
    Crawl Creator
    <CrawlCreate />
*/

var CrawlCreate = React.createClass({
    render : function() {
        return (
            <div className="create">
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

ReactDOM.render(<Crawls />, document.querySelector('#main'));