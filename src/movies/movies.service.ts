import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  create(movieData) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
  }

  removeMovie(id: string): boolean {
    this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
}
