import React from 'react';

import {Link} from '@reach/router';

const Welcome = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/4">Number</Link>
            <Link to="/hello">Word</Link>
            <Link to="/hello/blue/red">Word With Style</Link>
            <div>Welcome</div>
        </div>
    )
}

export default Welcome;