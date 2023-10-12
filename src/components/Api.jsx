import React, { useState, useEffect } from "react";
import Navbar from './NavBar';
import HeroSection from "./HeroImage";
import Listas from "./Listas";

function Api() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=2`
    )
      .then((data) => data.json())
      .then((json) => {
        setMovies(json.results);
        setIsLoading(false); // Mark loading as complete
      });
      
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Show a loading message while data is loading
  }
  console.log(movies);
  return (
    <section>
      <Navbar />
      <HeroSection movies={movies} />
      <Listas movies={movies} />  
    </section>
  );
}

export default Api;
