import React from 'react'

function NavBar() {
  return (
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
  )
}

export default NavBar