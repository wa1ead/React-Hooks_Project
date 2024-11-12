import { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import SearchBar from "./components/SearchBar";

function App() {
  const movies = [
    {
      title: "Avatar",
      description:
        "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      rating: "7.9",
    },
    {
      title: "I Am Legend",
      description:
        "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
      rating: "7.2",
    },
    {
      title: "300",
      description:
        "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
      rating: "7.7",
    },
    {
      title: "The Avengers",
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
      rating: "8.1",
    },
    {
      title: "The Wolf of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      rating: "8.2",
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      rating: "8.6",
    },
    {
      title: "Game of Thrones",
      description:
        "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
      rating: "9.5",
    },
    {
      title: "Breaking Bad",
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
      rating: "9.5",
    },
  ];

  //The searchBar input state
  const [title, setTitle] = useState("");
  //The filtered movies state
  const [filteredMovies, setFilteredMovies] = useState("");
  //THE DISPLAY MODAL STATE
  const [modal, setModal] = useState(false);

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
  }, [title]);

  //HANDLING CLICK ADD MOVIE BUTTON EVENT
  function handleClickModal() {
    setModal(!modal);
  }

  return (
    <>
      <SearchBar
        title={title}
        modal={modal}
        handleChange={handleChange}
        handleClickModal={handleClickModal}
      />
      <MoviesList movies={filteredMovies ? filteredMovies : movies} />
    </>
  );
}

export default App;
