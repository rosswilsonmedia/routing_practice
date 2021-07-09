import React from 'react';

import {Link} from '@reach/router';

const WordWithStyle = (props) => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/4">Number</Link>
            <Link to="/hello">Word</Link>
            <Link to="/hello/blue/red">Word With Style</Link>
            <div
                style={{color: props.color, backgroundColor: props.backgroundColor}}
            >
                The word is: {props.word}
            </div>
        </div>
    )
}

export default WordWithStyle;