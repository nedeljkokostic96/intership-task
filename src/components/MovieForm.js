import React, {Component} from 'react';

var newestMovies = [];

const mainDivStyle = {
    width : '50vw',
    marginLeft: '20%'
};

export default class MovieForm extends Component{
    
    constructor(){
        super();
        this.state = {
            imageUrl : '',
            title : '',
            subtitle : '',
            description : '',
            urlErr : '',
            titleErr : '',
            subtitleErr : '',
            descriptionErr : ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(){
        if(this.state.title.length === 0 || this.state.subtitle.length === 0 || this.state.description.length === 0 || this.state.imageUrl.length === 0){
            let errTitle = this.state.title === 0 ? 'Title must no be empty!' :'';
            let errSubtitle = this.state.subtitle === 0 ? 'Subtitle must no be empty!' :'';
            let errUrl = this.state.imageUrl === 0 ? 'imageUrl must no be empty!' :'';
            let errDescr = this.state.description === 0 ? 'Description must no be empty!' :'';
            this.setState({
                urlErr : errUrl,
                titleErr : errTitle,
                subtitleErr : errSubtitle,
                descriptionErr : errDescr
            });
            return;
        }else{
            newestMovies.push(this.state);
        }
    }
    
    render(){
        return(
            <div style={mainDivStyle}>
                <form>
                    
                    <div className="form-group">
                        <label >Image imageUrl</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="imageUrl"
                            placeholder="Image imageUrl"
                            onChange={this.handleChange} 
                        />
                        <p style={{fontSize: '2vh'}}>{this.state.urlErr}</p>
                    </div>
                    <div className="form-group">
                        <label >Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="title"                            
                            placeholder="Title"
                            onChange={this.handleChange} 
                        />
                        <p style={{fontSize: '2vh'}}>{this.state.titleErr}</p>
                    </div>
                    <div className="form-group">
                        <label >Subtitle</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="subtitle"                            
                            placeholder="Subtitle"
                            onChange={this.handleChange} 
                        />
                        <p style={{fontSize: '2vh'}}>{this.state.subtitleErr}</p>
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            name="description" 
                            placeholder="Description"
                            onChange={this.handleChange} 
                        />
                        <p style={{fontSize: '2vh'}}>{this.state.descriptionErr}</p>
                    </div>
                    <button 
                        type="submit" 
                        onClick={this.handleSubmit} 
                        className="btn btn-primary"
                    >Submit</button>
                </form>
            </div>
        );
    }
}