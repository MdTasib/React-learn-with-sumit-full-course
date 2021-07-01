import React, { useReducer, createContext } from 'react';
import Counter from './Counter';
import ComplexCounter from './ComplexCounter';
import CounterThree from './CounterThree';
import ComponentA from './ComponentA';
import GetPost from './GetPost';
import GetPost2 from './GetPost2';

// example 4
// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// export const counterContext = createContext();

const UserReducer = () => {
    // example 4
    // const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {/* <p>Counter component</p>
            <Counter />
            <hr /> */}
            {/* <p>Complex Counter component</p>
            <ComplexCounter /> */}
            {/* <p>Counter Three Component</p>
            <CounterThree /> */}

            {/* example 4 */}
            {/* <div>
                <p>Count : {count}</p>
                <counterContext.Provider value={{ dispatch }}>
                    <ComponentA />
                </counterContext.Provider>
            </div> */}

            {/* <GetPost /> */}
            <GetPost2 />
        </div>
    );
};

export default UserReducer;