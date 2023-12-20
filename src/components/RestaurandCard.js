import { CDN_URL } from "../utils/constants";

const RestaurandCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, minDeliveryTime, cloudinaryImageId } =
    resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h5>{name}</h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{minDeliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurandCard;
