import React from 'react'
import '../css/Marker.css';


function Marker({ color, name, id }) {
    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
                text={id}
            >
            <h4>{id}</h4>
            </div>
            <div className="pulse" />

        </div>
    );
}

export default Marker
