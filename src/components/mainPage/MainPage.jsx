import React from "react";
import FeaturedTitleImage from "../../assets/image/FeaturedTitleImage.png";
import MoviesCard from "../moviesCard/MoviesCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./MainPage.css";

const MainPage = ({ featured, dataArr }) => {
  function secondsToHms(date) {
    date = Number(date);
    let h = Math.floor(date / 3600);
    let m = Math.floor((date % 3600) / 60);
    let newDate = `${h}h ${m}m`;
    return newDate;
  }

  return (
    <div className="mainPageContainer">
      <div className="topWrapper">
        <h3 color="red">{featured?.Category}</h3>
        <div>
          <img src={FeaturedTitleImage} alt="FeaturedTitleImage" />
        </div>
        <div className="movesData">
          <h4>{featured?.ReleaseYear}</h4>
          <h4>{featured?.MpaRating}</h4>
          <h4>{secondsToHms(featured?.Duration)}</h4>
        </div>
        <p>{featured?.Description}</p>
        <div>
          <button className="playButtonMainPage"> Play </button>
          <button className="moreInfoButton"> More Info </button>
        </div>
      </div>
      <h3 className="trandingNow">Trending Now</h3>
      <Carousel axis="horizontal" autoPlay={true} width="50%">
        {dataArr?.map((items) => {
          return (
            <div className="imgContainercarusel">
              <MoviesCard item={items} key={items.Id} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MainPage;
