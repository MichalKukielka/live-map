import React from 'react'

function LoadingWheel() {
    return (
    <div className="container d-flex justify-content-center bg-light">
        <div className="spinner-border mx-5 my-5 px-3 py-3" role="status">
          <span className="sr-only">Loading...</span>
        </div>
    </div>
    )
}

export default LoadingWheel
