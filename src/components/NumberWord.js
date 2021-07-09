import React from 'react';

import {Link} from '@reach/router';

const NumberWord = (props) => {
    if(isNaN(props.value)==false){
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/4">Number</Link>
                <Link to="/hello">Word</Link>
                <Link to="/hello/blue/red">Word With Style</Link>
                <div>The number is: {props.value}</div>
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/4">Number</Link>
                <Link to="/hello">Word</Link>
                <Link to="/hello/blue/red">Word With Style</Link>
                <div>The word is: {props.value}</div>
            </div>
        )
    }
}

export default NumberWord;