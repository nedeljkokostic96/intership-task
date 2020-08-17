import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import MovieForm from './MovieForm';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards',
            displayForm : false,
            displayMovies: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const {name} = event.target;
        this.setState({
            displayForm : name === 'displayForm' ? true : false,
            displayMovies : name === 'displayMovies' ? true : false,
        });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div style={{minHeight: '10vh', textAlign:'center', marginTop: '2vh'}}>
                    <button name="displayForm" className="btn btn-primary" onClick={this.handleClick}>Add new movie</button>
                    <button name="displayMovies" className="btn btn-primary" onClick={this.handleClick}>Show movies</button>
                </div>
                {this.state.displayForm ? <MovieForm /> : ''}
                {this.state.displayMovies ? <div className="mt-5"><Movies /></div> : ''}
            </div>
        );
    }
}