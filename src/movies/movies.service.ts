import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
  }

  removeMovie(id: number) {
    this.getMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getMovie(id);
    this.removeMovie(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
