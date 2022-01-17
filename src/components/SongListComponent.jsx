import { useState } from "react/cjs/react.development";

const SongListComponent = (props) => {
  const [selectedSongLocal, setSelectedSongLocal] = useState();
  return (
    <aside className="songList-component">
      {props.musicList.map((music, index) => {
        return (
          <p
            className="player-component__music"
            key={index}
            style={
              selectedSongLocal === index
                ? { background: "grey", border: "1px solid grey",color:"black" }
                : {}
            }
            id={music.id}
            onClick={() => {
              props.selectSong(music.id);
              setSelectedSongLocal(music.id);
            }}
          >
            {music.name}
          </p>
        );
      })}
    </aside>
  );
};
export default SongListComponent;
