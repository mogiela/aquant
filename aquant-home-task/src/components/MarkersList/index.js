import React from 'react';
import Marker from '../Marker';
import './style.scss';

const MarkersList = ({markers, deleteMarker}) => 
    <div className="markers-list">
        <p>Coordinates list</p>
        {markers.map((marker) =>
            <Marker key={marker.id} location={marker.location} onClick={deleteMarker}/>
        )}
    </div>

export default MarkersList;