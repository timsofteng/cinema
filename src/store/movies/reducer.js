const initialState = {
  genres: [],
  movies: [],
  currentPage: 1,
  errors: [],
  isLoading: false,
  currentTab: "",
  view: "",
  viewInfoId: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_GENRES":
    case "FETCH_MOVIES":
    case "LOAD_PAGE":
      return { ...state, isLoading: true };

    case "FETCH_GENRES_SUCCEED":
      return { ...state, genres: action.payload.convertResult };

    case "FETCH_MOVIES_SUCCEED":
      const movies = action.payload.response.data.results;
      const noReset = action.payload.reset;
      return noReset
        ? {
            ...state,
            movies: [ ...state.movies, ...movies ],
            isLoading: false,
            currentPage: state.currentPage + 1
          }
        : {
            ...state,
            movies: movies,
            currentTab: action.payload.id,
            isLoading: false
          };

    case "FETCH_GENRES_ERROR":
    case "FETCH_MOVIES_ERROR":
      const error = action.payload;
      return { ...state, errors: error, isLoading: false };

    case "SWITCH_VIEW":
      return { ...state, view: action.payload };

    case "VIEW_INFO":
      return { ...state, viewInfoId: action.payload };

    default:
      return state;
  }
}
