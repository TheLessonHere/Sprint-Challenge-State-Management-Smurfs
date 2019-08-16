import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios.get ('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: "Unable to load data" })
        });
}

export const FORM_SUBMIT = 'FORM_SUBMIT';

export const formSubmit = (data) => dispatch => {
    dispatch({ type: FORM_SUBMIT, payload: data });
}