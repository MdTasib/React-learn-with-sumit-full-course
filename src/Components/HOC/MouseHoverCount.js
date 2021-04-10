import React from 'react';
import withCounter from './withCounter';

const MouseHoverCount = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
    );
};

export default withCounter(MouseHoverCount);