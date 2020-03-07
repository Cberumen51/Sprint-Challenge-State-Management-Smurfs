import React from 'react'


const SmurfInfo = props => {
    console.log('smurf info props', props)
    return (
        <div className = 'smurfWrapper'>
            <h3>{props.e.name}</h3>
            <p>{props.e.age}</p>
            <p>{props.e.height}</p>
        </div>
    )
}

export default SmurfInfo;
