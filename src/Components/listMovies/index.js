import React, { useState, useEffect } from "react";
import { getMovies } from "../../Services/data";

export default function ListMovies() {
  const [movies, setMovies] = useState([]);

  const moviesData = () => {
    getMovies().then((response) =>
      setMovies(
        response.data.films.filter(
          ({ duration_seconds }) => duration_seconds > 5500
        )
      )
    );
  };

  useEffect(() => {
    moviesData();
    setInterval(() => {
      moviesData();
    }, 5000);
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <h1 className="font-weight-light text-center">Movies</h1>
        <div className="container mt-4">
          <div className="row d-flex justify-content-around">
            {movies.map(
              ({ title, short_description, duration, duration_seconds }) => {
                return (
                  <div className="col-12 mb-3" key={title}>
                    <div className="card">
                      <img src="" alt="" />
                      <div className="card-body">
                        <h4 className="card-title">
                          <b>{title}</b>
                        </h4>
                        <span>
                          <b>
                            <p>{short_description}</p>
                          </b>
                        </span>
                        <span>
                          <b>
                            <p>{duration}</p>
                          </b>
                        </span>
                        <span>
                          <b>
                            <p>{duration_seconds} seconds</p>
                          </b>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
