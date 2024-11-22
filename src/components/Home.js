import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PopularMoviesList from "./PopularMoviesList";
import SearchedMoviesList from "./SearchedMoviesList";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import fetchPopularMovies from "../services/fetchPopularMovies";
import axios from "axios";

async function fetchSearchedMovies(query) {
  if (!query || query.trim() === "") {
    return []; // Return an empty array if query is empty
  }

  const url = `https://api.themoviedb.org/3/search/movie?query=${query.trim()}`;

  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzI3OWNlYTY0YzQzMTM3NjllOWQ0YTI4M2Q2ZDE0YSIsIm5iZiI6MTczMjEwMTAwMC42MjY1ODYsInN1YiI6IjY3MjRjMDM1YTQ5OWNjMmVmNzA1MDFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsPQH0ZHA1yJQs6XcAAxNXWXEGtMZDxN5Aez6-h5RUk",
    },
  };

  try {
    // Axios handles JSON parsing automatically
    const response = await axios.get(url, config);
    const searchedMoviesData = response.data.results || [];
    console.log("searched:", searchedMoviesData);
    return searchedMoviesData;
  } catch (err) {
    console.error("Error fetching searched movies:", err);
    throw err;
  }
}
export default function Home() {
  //THE MOVIES DATA STATE
  const [movies, setMovies] = useState([]);
  //The searched movies state
  const [searchedMovies, setSearchedMovies] = useState([]);
  //The searchBar input state
  const [title, setTitle] = useState("");
  //THE DISPLAY MODAL STATE
  const [modal, setModal] = useState(false);
  //THE FORMDATA INPUTTED STATE
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    poster: "",
    rating: 0,
  });

  //INSERTING DATA INTO MOVIES STATE
  useEffect(() => {
    async function popularMovies() {
      //GETTING MOVIES DATA FROM API FETCHING FUNCTION
      const popularMoviesData = await fetchPopularMovies();
      //SETTING FETCHED MOVIES DATA INTO THE MOVIES STATE
      setMovies(popularMoviesData);
    }
    popularMovies();
  }, []);

  console.log("home popular:", movies);

  //HANDLING SEARCHBAR INPUT
  function handleSearch(e) {
    setTitle(() => e.target.value);
  }
  console.log(title);

  //DISPLAYING LIST OF SEARCHED MOVIES
  useEffect(() => {
    async function searchedMovies() {
      //GETTING SEARCHED MOVIES DATA FROM API FETCHING FUNCTION
      const searchedMoviesData = await fetchSearchedMovies(title);

      //SETTING SEARCHED MOVIES DATA INTO THE SEARCHED MOVIES STATE
      setSearchedMovies(searchedMoviesData);
    }
    searchedMovies();
  }, [title]);
  console.log("home searched:", searchedMovies);

  //HANDLING CLICK ADD MOVIE BUTTON EVENT
  function handleClickModal() {
    setModal(!modal);
  }

  //HANDLING CHANGE FORM DATA INPUT
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  //SAVING FORMDATA OBJECT INTO MOVIES ARRAY
  function handleSaveMovie(e) {
    e.preventDefault();
    //INSERTING MOVIE DATA INTO MOVIES JSON FILE
    setMovies((prevMovies) => [...prevMovies, formData]);
    // console.log(formData);
    setModal(false);
    setFormData({
      title: "",
      description: "",
      poster: "",
      rating: 0,
    });
    // console.log(formData);
  }

  return (
    <div className="bg-blue-950 px-10">
      <div className="flex items-center justify-between p-4 max-md:flex-col gap-4">
        <Link to="/">
          <img
            src="../moviesapp-icon.png"
            alt="moviesApp"
            className="w-36 h-20"
          />
        </Link>
        <div className="rounded-lg bg-gray-200 ">
          <div className="flex">
            <SearchBar handleSearch={handleSearch} />
            <Modal
              modal={modal}
              handleClickModal={handleClickModal}
              handleInputChange={handleInputChange}
              handleSaveMovie={handleSaveMovie}
            />
          </div>
        </div>
      </div>
      {searchedMovies.length > 0 ? (
        <SearchedMoviesList movies={searchedMovies} title={title} />
      ) : (
        <PopularMoviesList movies={movies} />
      )}
    </div>
  );
}
