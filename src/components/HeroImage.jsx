import React from "react";

function HeroSection({ movies }) {
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
      <div className="col-12 col-md-7 position-absolute text-white d-flex flex-column  align-items-start h-75 justify-content-end px-5 spotlight">
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
        <div className="row d-flex justify-content-between w-100 px-3 pt-1 pt-md-3">
          <button
            type="button"
            className="col-12 col-md-5 btn btn-outline-light rounded fw-bolder d-flex align-items-center justify-content-center gap-3"
          >
            <i className="bi bi-play fs-4"></i>
            Reproducir
          </button>
          <button
            type="button"
            className="mt-2 mt-md-0 col-12 col-md-5 btn btn-outline-dark rounded text-white fw- d-flex align-items-center justify-content-center gap-3"
          >
            <i className="bi bi-info-circle fs-5"></i><span className="">Más información</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
