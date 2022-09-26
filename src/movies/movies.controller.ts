import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  /**
   * moviesService class를 가져옴
   * @param moviesService
   */
  constructor(private readonly moviesService: MoviesService) {}

  /**
   * @returns Movie 목록
   */
  @Get()
  getMovies(): Movie[] {
    return this.moviesService.getMovies();
  }

  /**
   * @param movieId
   * @returns Movie 상세 정보
   */
  @Get(':id')
  getMovie(@Param('id') movieId: number) {
    return this.moviesService.getMovie(movieId);
  }

  /**
   * @param movieData
   * @returns
   */
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.removeMovie(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
