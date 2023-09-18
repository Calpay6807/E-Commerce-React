import React, { useEffect, useState } from "react";

const Header = ({ data, setData }) => {
  const [search, setSearch] = useState("");
  const [backupData, setBackupData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Arama işlemini gerçekleştirin ve sonuçları yeni bir diziye filtreleyin
    const searchResults = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    // Filtrelenmiş sonuçları ana veriye atayın
    setData(searchResults);
  };
  if (backupData.length === 0 && data.length > 0) {
    setBackupData(data);
  }
  // Arama sonuçlarını sıfırlamak için bir "Sıfırla" düğmesi ekleyin
  const handleReset = () => {
    // Başlangıç verisini kullanarak data'yı sıfırla
    setData(backupData);
    setSearch("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid p-5 ">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product(detail)
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form
            onSubmit={handleSubmit}
            className="d-flex  btn-group"
            role="search"
          >
            <input
              onChange={handleChange}
              value={search}
              className="form-control me-2 "
              type="search"
              placeholder="search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success d-flex align-items-center justify-content-center"
              type="submit"
            >
              Search
            </button>
            <button
              onClick={handleReset}
              className="btn btn-outline-danger d-flex align-items-center justify-content-center "
              type="button"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
