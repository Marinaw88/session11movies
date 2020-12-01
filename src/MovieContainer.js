// Bottom
// And position relative and absolute
// You put absolute on your text and relative on the image
import React from 'react';

class MovieContainer extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            title: this.props.contents.title,
            release_date: this.props.contents.release_date,
            poster_path: this.props.contents.poster_path
        }
        //given one of these movies, heres a container ^
    }

    render(){
        const imageLink = "https://image.tmdb.org/t/p/w500";

        return(
            <div className="movieContainer" >
                <img src = {imageLink + this.state.poster_path} className="poster">
                </img>
            <div className="movieInfo">
                <h2>{this.state.title} ({this.state.release_date})</h2>
            </div>
        </div>
    
        );}
}
export default MovieContainer;


//onMouseOver event