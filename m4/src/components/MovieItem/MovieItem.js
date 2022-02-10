import React, { Component } from 'react';
import './MovieItem.css';
import globalStore from '../GlobalState/globalStore';

class MovieItem extends Component {
    addToFavorites(Title){
        console.log(Title);
        globalStore.dispatch({
            type: "ADD_TO_FAVORITES",
            payload: {
                favorites: Title
            }
        })
    }

    render() {
        const { Title, Year, Poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" onClick={()=>this.addToFavorites(Title)} className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;