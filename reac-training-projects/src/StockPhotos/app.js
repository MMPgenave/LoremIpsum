import React, { useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
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
  const [searchValue, setSearchValue] = useState(""); //input tag value
  const inputRef = React.useRef(null); //refrence to input element
  console.log(`Page :${page}`);
  console.log(`searchValue : ${searchValue}`);

  //Fetching function
  const getPhotos = (url) => {
    axios
      .get(url)
      .then((resp) => {
        setLoading(true);
        if (!searchValue) {
          //mainUrl
          const newPhotos = [...photos];
          console.log("data from mainUrl =", resp.data);
          for (let i = 0; i < resp.data.length; i++) {
            //adding resp.data to newphotos
            newPhotos.push(resp.data[i]);
          }
          flag.current = true;
          setPhotos(newPhotos);
        } else {
          //searchUrl

          let newPhotos;
          if (page===1) {
            newPhotos = [];
          } else {
            newPhotos = [...photos];
          }

          console.log("data from search query =", resp.data.results);
          for (let i = 0; i < resp.data.results.length; i++) {
            //adding resp.data to newphotos
            newPhotos.push(resp.data.results[i]);
          }
          flag.current = true;
          setPhotos(newPhotos);
        } //end search section

        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  //Initial photo fetching
  React.useEffect(() => {
    //using the searchValue state to toggle between mainUrl and searchUrl
    let URL;
    if (searchValue) {
      URL = `${searchUrl}?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}&query=${searchValue}`;
    } else {
      URL = `${mainUrl}?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}`;
    }
    getPhotos(URL);
  }, [page, searchValue]);

  //listening for scroll event after the DOM mounted

  React.useEffect(() => {
    const Event = window.addEventListener("scroll", () => {
      const variable = window.scrollY + window.innerHeight;
      if (variable >= document.body.scrollHeight) {
        if (flag.current) {
          console.log(" we are at the bottom of the page !");
          flag.current = false;
          setPage((prev) => prev + 1);
          setLoading(true);
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", Event);
      console.log("cleanup");
    };
  }, []);

  //Search function
  const searchIt = (e) => {
    e.preventDefault();
    //using the searchValue state to toggle between mainUrl and searchUrl
    setSearchValue((prev) => inputRef.current.value);
    setPage(1);
  };
  return (
    <>
      <h1>Getting Photos from Unsplash</h1>
      <form className="search">
        <input type="text" ref={inputRef} required />
        <button type="submit" onClick={(e) => searchIt(e)}>
          submit
        </button>
      </form>
      <div className="container" id="dar">
        {photos.map((item) => {
          return (
            <div className="single_item" key={item.id}>
              {/* <img
                src={item.urls ? item.urls.full : defaulImg}
                alt={"dartar"}
              /> */}
              <div
                style={{
                  border: "2px solid red",
                  height: "5rem",
                  color: "blue",
                  width:"2rem"
                }}
              >
                
                {item.likes}
              </div>
              <div className="info">
                <div>
                  {item.likes} <FaHeart />
                </div>
              </div>
            </div>
          );
        })}
        {loading ? <h2>Loading...</h2> : null}
      </div>
    </>
  );
}
