import React from 'react'

function Listas({movies}) {
  return (
    <div className="contenedor px-1 gap-2 px-4" key={movies.id}>
        {movies.map((movie) => (
          <div className="position-relative mb-5 rounded">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              class="card-img-top rounded"
              alt="..."
            />

            <div className="title-overlay rounded-bottom">
              <h6 className="text-white px-2 fs-6 py-1">{movie.title}</h6>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Listas