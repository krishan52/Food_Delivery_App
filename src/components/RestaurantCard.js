import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return (
      <div className="res-card">
        <img
          alt="res-logo"
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <div className="features">
          <h3 className="res-card-title">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} minutes</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;