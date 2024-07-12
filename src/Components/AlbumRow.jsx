import { useEffect, useState } from "react";
import Song from "./Song";

const AlbumRow = ({ artistName }) => {
  const [tracks, setTracks] = useState([]);
  const fillMusicSection = async (artistName) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        let arraytracks = [];
        for (let i = 0; i < 4; i++) {
          arraytracks.push(data[i]);
        }
        setTracks(arraytracks);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillMusicSection(artistName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{tracks && tracks.map((track) => <Song track={track} key={track.id} />)}</>;
};

export default AlbumRow;
