import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { imageData } from "./resurs";

const MoviesCard = ({ item }) => {
  const [objKey, setObjKey] = useState(null);
  useEffect(() => {
    for (let key in imageData) {
      if (key === item.CoverImage) {
        setObjKey(key);
      }
    }
  }, [item.CoverImage, objKey]);
  return (
    <div className="moviesCardContainer">
      {objKey && <img src={imageData[objKey]} alt={item.TitleImage} />}
    </div>
  );
};

export default MoviesCard;
