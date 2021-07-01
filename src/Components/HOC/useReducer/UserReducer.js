import React from 'react';
import Counter from './Counter';
import ComplexCounter from './ComplexCounter';
import CounterThree from './CounterThree';

const UserReducer = () => {
    return (
        <div>
            {/* <p>Counter component</p>
            <Counter />
            <hr /> */}
            {/* <p>Complex Counter component</p>
            <ComplexCounter /> */}
            <p>Counter Three Component</p>
            <CounterThree />
        </div>
    );
};

export default UserReducer;