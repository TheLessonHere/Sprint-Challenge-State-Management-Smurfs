import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';

export const initialState = {
    isFetching: false,
    error: '',
    name: '',
    age: null,
    height: '',
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: '',
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                quote: '',
                isFetching: false,
                error: action.payload
            };
        default: 
            return state;
    }
};