import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";
import {
  addToFavorites,
  removeFromFavorites,
} from "../actions/favoritesActions";

const AddToFavorites = () => {
  const dispatch = useDispatch();

  const [selectedCity, setSelectedCity] = useState({});

  const { name, key } = useSelector((state) => state.cityForecast);
  const { favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    setSelectedCity({ name, key });
  }, [name, key]);

  const isFav =
    favorites && favorites.some((fav) => fav.key === selectedCity.key);

  const handleClick = () => {
    isFav
      ? dispatch(removeFromFavorites(selectedCity))
      : dispatch(addToFavorites(selectedCity));
  };

  return (
    <Icon
      onClick={handleClick}
      name={`heart${!isFav ? " outline" : ""}`}
      size="huge"
      color="red"
      title="Add to favories"
    />
  );
};

export default AddToFavorites;
