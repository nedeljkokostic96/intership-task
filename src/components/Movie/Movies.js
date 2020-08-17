import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import newestMovies from '../MovieForm';
export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: [],
            newMovies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ 
            movies: MovieService.getMovies(),
            newMovies : newestMovies
        }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} />
                        {/*<MovieList movies={this.state.newMovies} />*/}
                    </div>
                </div>
            </div>
        );
    }
}