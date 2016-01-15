import React from 'react';
import api from '../parse/api';

import {Link,History} from 'react-router';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

var StepDetails = React.createClass({
    mixins : [History],
    getInitialState() {
        return {
            step: null
        }
    },
    componentWillMount(){
        var currentComp = this;
        var missionId = this.props.params.missionId;
        api.userCurrentStep(missionId).then(function(stepObj){
            console.log(stepObj.get('title'));
            console.log(stepObj.get('stepOrder'));

            currentComp.setState({step:stepObj});
        })
    },
    completeStep() {
        var currentComp = this;

        api.completeStep(this.props.params.missionId).then(function(result){
            if(result==='completed'){
                currentComp.history.pushState(null, '/completed');
            }
            else {
                currentComp.setState({step:result});

                currentComp.history.pushState(null, '/currentadventures/'+currentComp.props.params.missionId);
            }
        });
    },
    render() {
        var title = this.state.step? this.state.step.get('title'): '';
        var description = this.state.step? this.state.step.get('description'):'';
        var center;
        if (this.state.step) {
          var location = this.state.step.get('location');
          var center = {lat: location.latitude, lng: location.longitude};
        }

        //var title = 'fsdg';
        //var description = 'dsg';

        return (
          <div>
            <div style={{float: 'left', marginRight: 20}} className="adventure stepdetails">
                <ul className="in-progress">
                    <li className="adventure-display in-progress--title"><p>{title}</p></li>
                    <li className="adventure-display in-progress--desc"><p>{description}</p></li>
                </ul>
                <button onClick={this.completeStep}>Next Step</button>
            </div>
            <div style={{overflow: 'hidden'}}>
              <GoogleMapLoader
                containerElement={<div style={{height: 400}}/>}
                googleMapElement={
                  <GoogleMap
                    zoom={9}
                    center={center}
                    options={{
                      draggable: false,
                      mapTypeControl: false,
                      zoomControl: false
                    }}
                  >

                  </GoogleMap>
                }/>
            </div>
          </div>
        )
    }
})

export default StepDetails;
