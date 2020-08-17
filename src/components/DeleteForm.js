import React, {Component} from 'react';
import newestMovies from './MovieForm';


export default class DeleteForm extends Component{

    constructor(){
        super();
        this.state = {
            movies : [],
            chosenMovie : -1
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.setState(
            {movies : newestMovies},
        );
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    handleClick() {
        let moviesUpdated = this.state.movies.splice(this.state.chosenMovie, 1);
        this.setState({
            movies : moviesUpdated
        });
    }

    render(){
        let counter = 0;
        let moviesOpt = this.state.movies.map(x => <option key={x.title} value={counter++}>{x.title}</option>);
        return(
            <div style={{border: '1px solid black'}}>
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <label className="mr-sm-2">Choose movie</label>
                            <select className="custom-select mr-sm-2" name='chosenMovie' onChange={this.handleChange}>
                                <option selected>Choose...</option>
                                {moviesOpt}
                            </select>
                        </div>
                        <div className="col-auto my-1">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}