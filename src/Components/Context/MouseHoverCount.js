import React from 'react';

export default function MouseHoverCount({ count, incrementCount, theme }) {
    const style = theme === 'dark' ? { backgroundColor: 'black', color: 'white' } : null;

    return (
        <div>
            <h2 style={style} onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
    )
};