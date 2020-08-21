import React from 'react'

function Car({ car }) {
    return (
        <div className="card my-1 mx-1 py-2">
            <div className="card-body py-0">
                <h5 className="card-title py-0 my-0">{car.id} / {car.name} </h5>
                <p className="card-text py-0 my-0"><strong>Longitudinal:</strong> {car.lng.toFixed(6)}</p>
                <p className="card-text"><strong>Lateral:</strong> {car.lat.toFixed(6)}</p>
            </div>
        </div>
    )
}

export default Car
