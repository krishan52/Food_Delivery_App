import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg  shadow-lg transform transition-transform duration-300 hover:-translate-y-4 hover:bg-gray-400">
        <img
          alt="res-logo"
          className="rounded-lg"
          src={CDN_URL+cloudinaryImageId}
        />
        <div className="features">
          <h3 className="res-card-title font-bold py-4 text-xl">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} minutes</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;