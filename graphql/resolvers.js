import { getById, getMovies, addMovie } from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, args) => getById(args.id)
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score)
  }
};

export default resolvers;