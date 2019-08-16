import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FORM_SUBMIT
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
                isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case FORM_SUBMIT:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        default: 
            return state;
    }
};