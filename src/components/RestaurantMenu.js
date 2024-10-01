import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.length > 0 ? (itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item.card.info.name} -{" Rs."}{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))):(
            <p>No items available</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;