import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchData } from '../actions';

const Display = (props) => {
    const getData = () => {
        props.fetchData();
    };

    useEffect(() => {
        getData();
    }, [])

    if (props.isFetching) {
        return (
        <div>
            <Loader className="spinner" type="BallTriangle" color="#ff0000" height={150} width={150} />
        </div>
        )
    }

    if (props.error) {
        return (
        <div className="error-container">
        <h2>{props.error}</h2>
        </div>
        )
    }

    return (
        <div className="smurfs-container">
        {props.smurfs.length > 1 ? props.smurfs.map(smurf => {
            return (
            <div className='smurf' key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            </div>
        )}) : <h2>Not Enough Smurfs Found</h2>}
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        isFetching: state.isFetching,
        name: state.name,
        age: state.name,
        height: state.height,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { fetchData })(Display);