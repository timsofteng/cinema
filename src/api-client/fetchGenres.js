import React from 'react';
import { get } from "./base";
import KEY from "../config";

const fetchGenres = () =>
    get(`3/genre/movie/list?api_key=${KEY}&language=en-US`);

export { fetchGenres };
