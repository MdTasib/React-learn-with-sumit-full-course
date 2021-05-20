import React from 'react';

export default function MouseHoverCount({ count, incrementCount }) {
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
    )
};