import React from 'react';
import SongList from '../components/SongList.js';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const songsData = JSON.parse(jsonString);
      const songs = songsData.feed.entry;
      console.log(songs);
      this.setState({ songs: songs });
    });

    request.send();
  }

  render(){
    return (
      <div>
        <h2>Top 20 UK Songs</h2>
        <SongList
          songs={this.state.songs}
        />
      </div>
    );
  }
}

export default SongContainer;
