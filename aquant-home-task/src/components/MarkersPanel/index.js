import React from 'react';
import MarkersList from '../MarkersList';
import MarkerForm from '../MarkerForm';
import './style.scss';

const MarkersPanel = ({markers, addMarker, deleteMarker}) => 
    <div className="markers-panel">
        <MarkerForm addMarker={addMarker}/>
        <MarkersList markers={markers} deleteMarker={deleteMarker}/>
    </div>

export default MarkersPanel;