import React from "react";

export class FetchPosters extends React.Component {
    state = {
        loading: true,
        postersPaths: null,
    };

    async componentDidMount(){
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=5ea6f181109d6b39c0b6e01983ac6ee0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4";
        const response = await fetch(url);
        const data = await response.json();
        const arrayOfMovies = data.results;
        const arrayOfPosters = arrayOfMovies.map((movie)=> movie.poster_path);
        const returnPosters = arrayOfPosters.map((url)=>{
            return <img src={`https://image.tmdb.org/t/p/w300${url}`} alt="poster"/>
        })
        console.log(arrayOfMovies);
        this.setState({postersPaths:returnPosters,loading: false})
    }

    render(){
        return(
            
            <div>
                {this.state.loading || !this.state.postersPaths ? <div>Loading...</div> : this.state.postersPaths}
            </div>
        );
    }
}