import React from 'react'

function LoadingWheel() {
    return (
    <div className="container d-flex justify-content-center bg-light">
        <div class="spinner-border mx-5 my-5 px-3 py-3" role="status">
          <span class="sr-only">Loading...</span>
        </div>
    </div>
    )
}

export default LoadingWheel
