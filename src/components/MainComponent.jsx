import ImageComponent from "./ImageComponent";
import PlayerComponent from "./PlayerComponent";
import music from "../data/music.json";
import { useState } from "react";
import SongListComponent from "./SongListComponent";
const MainComponent = (props) => {
  const [musicList, setMusicList] = useState(music);
  const [selectedSong, setSelectedSong] = useState();
  const selectSong = (id) => {
    setSelectedSong(music[id]);
  };
  return (
    <article className="main-component">
      <ImageComponent selectedSong={selectedSong} />
      <PlayerComponent selectedSong={selectedSong} />
      <SongListComponent
        musicList={musicList}
        selectSong={selectSong}
        selectedSong={selectedSong}
      />
    </article>
  );
};
export default MainComponent;
