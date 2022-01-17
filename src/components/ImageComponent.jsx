const ImageComponent = (props) => {
  return (
    <aside className="image-component">
      {props.selectedSong ? (
        <img
          src={props.selectedSong.links.images[0].url}
          alt={props.selectedSong.name}
          style={{height:"80vh",width:"100%",borderRadius:"10px"}}
        ></img>
      ) : (
        <p>Select a song</p>
      )}
    </aside>
  );
};
export default ImageComponent;
