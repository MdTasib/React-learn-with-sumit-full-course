import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

const UseEffect = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            {/* <ClassComponent /> */}
            <div>{show && <FunctionalComponent />}</div>
            <button onClick={() => setShow(prevShow => !prevShow)}>
                {show ? 'Hide Post' : 'Sow Post'}
            </button>
        </div>
    );
};

export default UseEffect;