import { CDN_URL } from "../utils/constants";

const RestaurandCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h5>{name}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default RestaurandCard;
