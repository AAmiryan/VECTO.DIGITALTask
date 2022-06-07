import { useEffect, useState } from "react";
import MainMenu from "./components/mainMenue/MainMenu";
import MainPage from "./components/mainPage/MainPage";
import featuredCoverImage from "./assets/image/FeaturedCoverImage.png";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDta() {
      try {
        let response = await fetch("/data.json");
        let resData = await response.json();
        setData(resData);
      } catch (err) {
        console.log(err);
      }
    }
    getDta();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${featuredCoverImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        backgroundSize: "cover",
        OBackgroundSize: "cover",
      }}
    >
      <div className="wrapper">
        <div>
          <MainMenu />
        </div>
        <div>
          <MainPage featured={data.Featured} dataArr={data.TendingNow} />
        </div>
      </div>
    </div>
  );
}

export default App;
