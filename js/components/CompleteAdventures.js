import React from 'react';
import Textarea from 'react-textarea-autosize';


var CompleteAdventures = React.createClass ({
    render() {
        return (
            <div className="adventure">
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
                
                <div className="adventure-display completed-info">
                    <h2>Review</h2>
                    <br />
                    <Textarea rows="4" />
                    <br />
                    <h2>Notes</h2>
                    <br />
                    <Textarea rows="4" />
                    <h2>Rating</h2>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                </div>
            </div>
        );
    }
});

export default CompleteAdventures;
