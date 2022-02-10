const state = { 
    movies: [
        
    ],
    favorites: [

    ]
}

export default function reducer(globalStore=state, action){
    console.log(action);
    switch(action.type){
        case "ADD_FILM":
        let films=[...state.movies];
        action.payload.movies.forEach((item)=>{
            films.push(item)
        })
        return{
            ...state,
            movies:films
        }
        case "ADD_TO_FAVORITES":
        let list=[...state.favorites];
        let filmInList = list.find(item=>item.Title===action.payload.Title);
        if(!filmInList){
            list.push(filmInList)
            return{
            ...state,
            favorites:list
        }
        }
        
       
    }
     return state
}

