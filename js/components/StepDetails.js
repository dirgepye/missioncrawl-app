import React from 'react';
import api from '../parse/api';

import {Link,History} from 'react-router';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

var style = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ede9e9"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"27"},{"gamma":"0.58"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a3d0da"},{"visibility":"on"}]}];

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
            <div style={{float: 'left', marginRight: 0, width: '40%'}} className="adventure stepdetails">
                <ul className="in-progress">
                    <li className="adventure-display in-progress--title"><p>{title}</p></li>
                    <li className="adventure-display in-progress--desc"><p>{description}</p></li>
                </ul>
                <button onClick={this.completeStep}>Next Step</button>
            </div>
            <div style={{overflow: 'hidden'}}>
              <GoogleMapLoader
                containerElement={<div style={{height: 400, margin: 10}}/>}
                googleMapElement={
                  <GoogleMap
                    zoom={15}
                    center={center}
                    options={{
                      draggable: false,
                      mapTypeControl: false,
                      zoomControl: false,
                      styles: style
                    }}
                  >
                    <Marker position={center} animation={2} />
                  </GoogleMap>
                }/>
            </div>
          </div>
        )
    }
})

export default StepDetails;
