import React, { useState, useEffect } from 'react';

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');

    const tick = () => {
        setDate(new Date());
        console.log('clock ticking');
    }

    const addClick = () => {
        setCount((prevState) => prevState + 1);
    }

    useEffect(() => {
        console.log('updated');
        document.title = `Clicked ${count} times`;
    }, [count])

    useEffect(() => {
        console.log('time runnig');
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            console.log('timer cleanup');
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button onClick={addClick}>Click {count}</button>
            <p>{text}</p>
            <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
    );
};

export default FunctionalComponent;