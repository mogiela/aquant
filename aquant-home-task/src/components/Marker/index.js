import React from 'react';
import './style.scss';

const Marker = ({ location, onClick }) => 
    <div className="marker">
        <p>{location[0]}, {location[1]}</p>
        <button onClick={onClick}>&times;</button>
    </div>

export default Marker;