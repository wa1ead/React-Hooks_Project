import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import SearchBar from "./components/SearchBar";
import Modal from "./components/Modal";
import Description from "./components/Description";
//IMPORTING MOVIES DATA FROM JSON FILE
const Movies = require("./Movies.json");

function App() {
  //THE MOVIES DATA STATE
  const [movies, setMovies] = useState(Movies);
  //The searchBar input state
  const [title, setTitle] = useState("");
  //The filtered movies state
  const [filteredMovies, setFilteredMovies] = useState("");
  //THE DISPLAY MODAL STATE
  const [modal, setModal] = useState(false);
  //THE FORMDATA INPUTTED STATE
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    poster: "",
    rating: 0,
  });

  //HANDLING SEARCHBAR INPUT
  function handleChange(e) {
    setTitle(e.target.value);
  }

  //FILTERING LIST OF MOVIES BASED ON SEARCHBAR INPUT
  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  }, [title, movies]);

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
    setFormData("");
    // console.log(formData);
  }

  return (
    //ROUTING COMPONENTS WITH DIFFERENT PATHS
    <Routes>
      <Route
        index
        path="/"
        element={
          <>
            <div className="flex items-center justify-center p-5 w-full">
              <div className="rounded-lg bg-gray-200 p-4 w-full">
                <div className="flex">
                  <SearchBar handleChange={handleChange} />
                  <Modal
                    modal={modal}
                    handleClickModal={handleClickModal}
                    handleInputChange={handleInputChange}
                    handleSaveMovie={handleSaveMovie}
                  />
                </div>
              </div>
            </div>
            <MoviesList movies={filteredMovies ? filteredMovies : movies} />{" "}
          </>
        }
      />
      <Route
        path="/description/:title"
        element={<Description movies={movies} />}
      />
    </Routes>
  );
}

export default App;
