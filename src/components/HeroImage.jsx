import React from 'react';

function HeroSection({movies}) {
  // Verificar si movies es un arreglo válido y tiene al menos un elemento
   

  return (
    <div className="hero vh-100 position-relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${movies[6].poster_path}`}
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
          <h2 className="fw-bolder">{movies[6].title}</h2>
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
            <i className="bi bi-info-circle fs-5"></i>Más información
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
