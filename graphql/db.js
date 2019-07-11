let movies = [
  {
    id: "1",
    name: "John Wick",
    score: 4.0,
  },
  {
    id: "2",
    name: "Guardians Of Galaxy",
    score: 4.5,
  },
  {
    id: "3",
    name: "Toy Story",
    score: 3.0,
  },
  {
    id: "4",
    name: "Baby Driver",
    score: 3.5,
  },
  {
    id: "5",
    name: "Dunkirk",
    score: 5.0,
  },
  {
    id: "6",
    name: "Okja",
    score: 3.5,
  },
  {
    id: "7",
    name: "Living Boy In New York",
    score: 1.5,
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(m => m.id === String(id));
  return filteredMovies[0];
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(m => m.id !== String(id));

  if(movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};