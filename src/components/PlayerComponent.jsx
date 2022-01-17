const PlayerComponent = ({selectedSong}) => {
  return (
    <section className="player-component">
      {selectedSong ? (
        <audio autoPlay controls key={selectedSong.id}>
          <source src={selectedSong.url} type="audio/ogg" />
          <source src={selectedSong.url} type="audio/mpeg" />
        </audio>
      ) : (
        <></>
      )}
    </section>
  );
};
export default PlayerComponent;
