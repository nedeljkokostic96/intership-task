import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import MovieForm from './MovieForm';
import DeleteForm from './DeleteForm';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards',
            addMovieForm : false,
            displayMovies : false,
            deleteMovieForm : false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const {name} = event.target;
        this.setState({
            addMovieForm : name === 'addMovieForm' ? true : false,
            displayMovies : name === 'displayMovies' ? true : false,
            deleteMovieForm : name === 'deleteMovieForm' ? true : false,
        });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div style={{minHeight: '10vh', textAlign:'center', marginTop: '2vh'}}>
                    <button name="addMovieForm" className="btn btn-primary" onClick={this.handleClick}>Add new movie</button>
                    <button name="displayMovies" className="btn btn-primary" onClick={this.handleClick}>Show movies</button>
                    <button name="deleteMovieForm" className="btn btn-primary" onClick={this.handleClick}>Delete movie</button>
                </div>
                {this.state.addMovieForm ? <MovieForm /> : ''}
                {this.state.displayMovies ? <div className="mt-5"><Movies /></div> : ''}
                {this.state.deleteMovieForm ? <DeleteForm /> : ''}
            </div>
        );
    }
}