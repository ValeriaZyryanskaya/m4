import React, { Component } from 'react';
import './Favorites.css';
import globalStore from '../GlobalState/globalStore';

class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [
            
        ]
    }
    componentDidMount(){
        globalStore.subscribe(()=>{
            const state = globalStore.getState();
            this.setState({movies:state.favorites});
        })

    }
    
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li key={this.state.movies.imdbID}>{this.state.movies.Title} ({this.state.movies.Year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;