import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const defaulImg =
  "https://images.unsplash.com/photo-1633114127408-af671c774b39?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyNzg0ODJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzODAwNTQ3Ng&ixlib=rb-1.2.1&q=85";
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export default function App() {
  const flag = React.useRef(true);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  //Fetching function
  const getPhotos = (url) => {
    let URL;
    URL = `${url}?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}`;
    axios
      .get(URL)
      .then((resp) => {
        setLoading(true);
        const newPhotos = [...photos];
        for (let i = 0; i < resp.data.length; i++) {
          //adding resp.data to newphotos
          newPhotos.push(resp.data[i]);
        }
        flag.current = true;

        setPhotos(newPhotos);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  //Initial photo fetching
  React.useEffect(() => {
    getPhotos(mainUrl);
  }, [page]);

  //listening for scroll event after the DOM mounted
  React.useEffect(() => {
    const Event = window.addEventListener("scroll", () => {
      const variable = window.scrollY + window.innerHeight;
      if (variable >= document.body.scrollHeight) {
        if (flag.current) {
          console.log("   we are at the bottom of the page !");
          flag.current = false;
          setPage((prev) => prev + 1);
          setLoading(true);
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", Event);
      console.log("cleanuup");
    };
  }, []);

  return (
    <>
      <h1>Getting Photos from Unsplash</h1>
      <div className="container" id="dar">
        {photos.map((item) => {
          return (
            <div className="single_item" key={item.id}>
              <img
                src={item.urls ? item.urls.full : defaulImg}
                alt={"dartar"}
              />
            </div>
          );
        })}
        {loading ? <h2>Loading...</h2> : null}
      </div>
    </>
  );
}
