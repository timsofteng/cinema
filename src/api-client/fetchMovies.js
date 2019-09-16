import React from "react";
import { get } from "./base";
import KEY from "../config";

const fetchMovies = (id, page=1) =>
  get(`3/movie/${id}?api_key=${KEY}&language=en-US&page=${page}`);

export { fetchMovies };
