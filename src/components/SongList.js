import React from 'react';

const SongList = (props) => {

  if (props.songs === null) return null;

  const songNodes = props.songs.map((song, index) => {
    console.log(props.songs);
    return (<li key={index}><p>Rank: {index + 1}</p>Title: {song["im:name"].label} <p>Artist: {song["im:artist"].label}</p></li>)
    console.log(song);
  });

  return(
    <div>
      <ul>
        {songNodes}
      </ul>
    </div>
  )
}

export default SongList;
