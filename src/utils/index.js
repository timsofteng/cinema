const convertArrToOblWithKey = arr => {
  const obj = {};
  arr.forEach(genre => (obj[genre.id] = genre));
  return obj;
};

const idToText = (genreIds, genres, key="name") => {
  const sliceArr = genreIds.slice(0, 2);
  return sliceArr.map(id => (id = genres[id][key])).join(", ");
}

export { convertArrToOblWithKey, idToText };
