
import React from 'react';
import { connect } from 'react-redux';

import SmurfInfo from './smurfInfo';

const smurfList = props => {
    if (props.isFetching) {
        return <h3>They're Comming!</h3>
    }
    if (props.error) {
        return <h2>{props.error}</h2>
    }
    return (
        <>
         <h2>The Smurfs! {props.smurf}</h2>
        <button onClick = {props.submitButton}>{props.isFetching}</button>
        {props.smurfs && props.smurfs.map(smurf => <SmurfInfo key = {smurf.name} e = {smurf}/>)}
        </>
    )
}

const mapStatetoProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStatetoProps, null)(smurfList)