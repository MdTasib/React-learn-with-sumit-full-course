import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            // setCount(count + 1); this is the wrong way
            setCount((prevState => prevState + 1));
            i += 1;
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button type='button' onClick={() => setCount(prevState => prevState + 1)}>Add 1</button>

            <button onClick={addFive}>Add 5</button>
        </div>
    );
};

export default Counter;