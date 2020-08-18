import React from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

export class MapContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      activeMarker: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
    });
  };

  render() {
    return (
      <Map google={this.props.google}
           zoom={12}
           initialCenter={{lat: 57.719460, lng:11.971309}}
           streetViewControl
           zoomControl>
        <Marker title={'Batteri Recond AB'} position={{lat: 57.719460, lng:11.971309}} onClick={this.onMarkerClick}/>
        <InfoWindow visible marker={this.state.activeMarker}>
          <div>Your Location Here!</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA9MK5lsAwzn5md2y9Nnk6_pqk-tcMwWGE",
  language: 'sv',
})(MapContainer)