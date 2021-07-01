import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.result
            }
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong',
            }
        default:
            return state;
    }
}

const GetPost2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SUCCESS', result: data });
            })
            .catch(() => {
                dispatch({ type: 'ERROR' })
            })
    }, [])

    return (
        <div>
            {state.loading ? <img src='https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' alt='' /> : <ul>{state.post.title}</ul>}
            {/* {error ? error : null} */}

            {state.error || null}
        </div>
    );
};

export default GetPost2;