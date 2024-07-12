import { useSelector } from "react-redux";

const BranoCorrente = () => {
  const brano = useSelector((state) => state.playerState.brano);
  console.log(brano);
  return (
    <>
      {brano ? (
        <div className="d-flex text-white ">
          <div>
            <img alt="albumArtista" src={brano.album.cover_small} />
          </div>
          <div className="ms-2">
            <h5>{brano.title}</h5>
            <h6>{brano.artist.name}</h6>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img alt="albumArtista" src="" />
          </div>
          <div>
            <h5>{}</h5>
            <h6>{}</h6>
          </div>
        </div>
      )}
    </>
  );
};
export default BranoCorrente;
