import React from 'react'

const Artist = ({alternateNames}) => {
    return(
        <div className="single-song-container">
        <h1>{alternateNames}</h1>
        </div>
    )
}

export default Artist