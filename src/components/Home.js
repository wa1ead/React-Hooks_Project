import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import fetchAllMovies from "./fetchAllMovies";

export default function Home() {
  //THE MOVIES DATA STATE
  const [movies, setMovies] = useState([]);
  //The filtered movies state
  const [filteredMovies, setFilteredMovies] = useState([]);
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
    async function assignMovies() {
      //GETTING MOVIES DATA FROM API FETCHING FUNCTION
      const moviesData = await fetchAllMovies();
      //SETTING FETCHED MOVIES DATA INTO THE MOVIES STATE
      setMovies(moviesData);
    }
    assignMovies();
    console.log(movies);
  }, []);

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
    setFormData({
      title: "",
      description: "",
      poster: "",
      rating: 0,
    });
    // console.log(formData);
  }

  return (
    <div className='bg-blue-400'>
      <div className="flex items-center justify-center p-4 w-full">
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
      <MoviesList movies={filteredMovies ? filteredMovies : movies} />
    </div>
  );
}
