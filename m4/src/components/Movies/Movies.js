import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import globalStore from '../GlobalState/globalStore';
 

class Movies extends Component {
    state = { 
        movies: [
            
        ]
    }

    componentDidMount() {
        globalStore.subscribe(() => {
          const state = globalStore.getState();
          console.log(state);
          this.setState({ movies: state.movies});
        })
    }  
    render() { 
        return ( 
            <ul className="movies">
                {this.state.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;