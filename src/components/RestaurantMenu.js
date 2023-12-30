import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4743879&lng=77.50399039999999&restaurantId=78041&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  // Conditional rendering
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        <li>List of menu 1</li>
        <li>List of menu 2</li>
        <li>List of menu 3</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
