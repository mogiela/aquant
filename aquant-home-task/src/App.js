import React from 'react';
import Map from './components/Map';
import MarkersPanel from './components/MarkersPanel';
import './App.scss';

class App extends React.Component {
  state = {
    markers: []
  };

  addMarker = (marker) => {
    this.setState({markers: [...this.state.markers, marker]})
  }

  deleteMarker = (markerToDelete) => {
    const { markers } = this.state;
    const index = markers.findIndex((marker) => marker.id === markerToDelete.id)
    const newMarkers = markers.splice(index, 1);
    this.setState({markers: newMarkers})
  }

  render() {
    const {
      markers
    } = this.state;

    return (
      <div className="app">
          <MarkersPanel markers={markers} addMarker={this.addMarker} deleteMarker={this.deleteMarker}/>
          <Map markers={markers}/>
      </div>
    );
  };
};

export default App;
