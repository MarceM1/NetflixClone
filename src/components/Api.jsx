import React, { useState, useEffect } from "react";

function Api() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1`
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
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top
        "
        >
          <div className="container-fluid px-5 text-white">
            <a className="navbar-brand colorLogo fs-2" href="#">
              NETFLIX
            </a>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold text-white fs-6"
                    aria-current="page"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-6" href="#">
                    Novedades Populares
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link fs-6 text-white">
                    Las mejor puntuadas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-6 text-white ">
                    Explora por idiomas
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero vh-100 position-relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`}
          className="position-absolute hero"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center center",
          }}
          alt="..."
        />
        <div className="position-absolute text-white d-flex flex-column w-50 align-items-start h-75 justify-content-end px-5 spotlight">
          <div>
            <h2 className="fw-bolder">{movies[0].title}</h2>
            <h5
              className="fw-bolder"
              style={{
                maxWidth: "100vw",
                height: "20vh",
                whiteSpace: "break-spaces",
                overflow: "clip",
                textOverflow: "ellipsis",
              }}
            >
              {movies[0].overview}
            </h5>
          </div>
          <div className="d-flex justify-content-between gap-5 w-100 pt-5">
            <button
              type="button"
              className="btn btn-outline-light rounded w-50 fw-bolder d-flex align-items-center justify-content-center gap-3"
            >
              <i className="bi bi-play fs-4"></i>
              Reproducir
            </button>
            <button
              type="button"
              className="btn btn-outline-dark rounded w-50 text-white fw- d-flex align-items-center justify-content-center gap-3 "
            >
              <i class="bi bi-info-circle fs-5"></i>Más información
            </button>
          </div>
        </div>
      </div>
      <div className="contenedor px-1 gap-2" key={movies.id}>
        {movies.map((movie) => (
          <div className="position-relative mb-5 rounded">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              class="card-img-top rounded"
              alt="..."
            />

            <div className="title-overlay rounded-bottom">
              <h5 className="text-white px-2">{movie.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Api;
