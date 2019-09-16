const fetchMovies = (id, page) => {
  return {
    type: "FETCH_MOVIES",
    payload: {id, page}
  };
};

const fetchGenres = () => {
  return {
    type: "FETCH_GENRES"
  };
};

const switchView = view => {
  return {
    type: "SWITCH_VIEW",
    payload: view
  };
};

const viewInfo = id => {
  return {
    type: "VIEW_INFO",
    payload: id
  };
};

const loadPage = (id, page, reset) => {
  return {
    type: "LOAD_PAGE",
    payload: { id, page, reset }
  };
};

export { fetchMovies, fetchGenres, switchView, viewInfo, loadPage };
