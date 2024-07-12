import { Col } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite, removeFromFavourite } from "../actions/actions";

const Song = ({ track }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list);
  const isFav = favourites.includes(track);
  return (
    <Col key={track.id} className="col text-center">
      <img className="img-fluid cursor-point" src={track.album.cover_medium} alt="track" onClick={() => {}} />
      <p>
        Track: {track.title}
        <br />
        Artist: {track.artist.name}
      </p>
      {isFav ? (
        <HeartFill
          color="red"
          size={16}
          className="mr-2 my-auto"
          onClick={() => dispatch(removeFromFavourite(track))}
        />
      ) : (
        <Heart color="grey" size={16} className="mr-2 my-auto" onClick={() => dispatch(addToFavourite(track))} />
      )}
    </Col>
  );
};

export default Song;
