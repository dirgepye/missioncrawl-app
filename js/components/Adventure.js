import React from 'react';
import samples from '../adventures';


var Adventure = React.createClass({
    render() {
        // var title = this.props.details.title;
        // var description = this.props.details.description;
        // var categories = this.props.details.categories;
        
        return (
            <li className="adventure">
                <div className="adventure-display">
                    <h2 className="adventure__title">Title</h2>
                    <p className="adventure__description">blah blah blah
                    vlabsda blah blah ba ba blbla bl blah blah blah vlabsda
                    blah blah ba ba blbla bl blah blah blah vlabsda blah
                    blah ba ba blbla bl </p>
                    <div className="adventure-category">
                        <ul>
                            <li><a href="#">category</a></li>
                        </ul>
                    </div>
                </div>
                <div className="adventure__button">
                    <button>More Info</button>
                    <button>Start!</button>
                </div>    
            </li>
        );
    }
});

// var Adventure = React.createClass({
//     render() {
//         var title = this.props.details.title;
//         var description = this.props.details.description;
//         var categories = this.props.details.categories;
        
//         return (
//             <li className="crawl">
//                 <div className="crawl__step">
//                     <div className="crawl-display">
//                         <h2 className="crawl__title">{title}</h2>
//                         <p className="crawl__description">{description}</p>
//                         <div className="crawl-category">
//                             <ul>
//                                 <li><a href="#">{categories}</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//         );
//     }
// });

export default Adventure;