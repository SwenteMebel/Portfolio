import axios from 'axios'; 

const url = 'http://www.omdbapi.com/?apikey=9bb58dbf&s=';
const key = ;

export default({
    namespaced: true,

    state: {
       movies: '',
       loadingStatus: 'notloading',
       error: [],

    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_MOVIES(state, payload){
            state.movies = payload.Search || []; // komt in een search vanuit API en in een array 
        },
        CLEAR_MOVIES(state, payload){
            state.movies = payload;
        },

        SET_ERROR(state, payload){
            state.error = [...state.error, payload]
        }


    },

    actions:{
        ophalenMovies(context, title){
            console.log('ophalenMovies functie in store', title)
            context.commit('LOADING_STATUS', 'loading');

            axios.get(url + title)
                .then(result => {
                    context.commit('LOADING_STATUS', 'notloading');
                    context.commit('SET_MOVIES', result.data);
                })
                .catch( err =>{
                    context.commit('LOADING_STATUS', 'notloading');
                    context.commit('CLEAR_MOVIES', [] );
                    context.commit('SET_ERROR', err ); 
                })
        },
        verwijderen(context){
            console.log('verwijder functie in store')
            context.commit('CLEAR_MOVIES');
        }


    },
    modules: {
        
    },

    getters: {
    
    }

})