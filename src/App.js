import React, {useState, useEffect} from 'react'
import Artist from './Components/Artist';
import axios from 'axios';

function App() {

  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [artistsAPI, setArtistsAPI] = useState('');

  var clientAccessToken = 'rnGNBFYfq9SZiCFfFqJmA6HGksYEkx3QetJYqYYeJUjoFajhfbdSHrbeUgWp2cFa';
  var geniusQueryURL = `https://api.genius.com/search?access_token=${clientAccessToken}&q=${query}`;
  var geniusArtistURL = `https://api.genius.com/${artistsAPI}?access_token=${clientAccessToken}`;

const geniusRequest = () => {
  axios.get(geniusQueryURL)
  .then(res => {
  setArtists(res.data.response.hits);
  setArtistsAPI(res.data.response.hits[0].result.primary_artist.api_path);
  console.log(res.data.response.hits[0].result.primary_artist.api_path);
  console.log(geniusArtistURL);
  })
  .catch(error => {
    console.log(error);
  });
}

useEffect(() => {
  geniusRequest();
}, [query])

const updateSearch = e => {
  setSearch(e.target.value);
}

const getQuery = e => {
  e.preventDefault();
  setQuery(search);
}


  return (
    <div className="genius-outer-container">
      <div className="genius-form-container">
      <form onSubmit={getQuery}>
            <input type="text" placeholder="search for an artist..." value={search} onChange={updateSearch}/>
            <button type="submit">Submit</button>
        </form>
      </div>
      <div className="genius-inner-container">
      {artists.map((artist,index) => (
        <Artist 
        key = {index}
        mainArtist = {artist.result.primary_artist.name}
        songName = {artist.result.title}
        coverImage = {artist.result.song_art_image_url}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
