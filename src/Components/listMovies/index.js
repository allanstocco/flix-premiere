import React, { useState, useEffect } from "react";
import { getMovies } from "../../Services/data";

export default function ListMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((response) =>
      setMovies(
        response.data.films.filter(
          ({ duration_seconds }) => duration_seconds > 5500
        )
      )
    );

    setInterval(() => {
      getMovies().then((response) =>
        setMovies(
          response.data.films.filter(
            ({ duration_seconds }) => duration_seconds > 5500
          )
        )
      );
    }, 5000);
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <h1 className="font-weight-light text-center">Movies</h1>
        <div className="container mt-4">
          <div className="row d-flex justify-content-around">
            {movies.map(({ title, short_description, duration }) => {
              return (
                <div className="col-auto mb-3" key={title}>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
