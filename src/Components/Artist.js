import React from 'react'

const Artist = ({mainArtist, songName, coverImage}) => {
    return(
        <div className="single-song-container">
        <h1>{songName}</h1>
        <p>{mainArtist}</p>
        <img src={coverImage} alt=""/>
        </div>
    )
}

export default Artist