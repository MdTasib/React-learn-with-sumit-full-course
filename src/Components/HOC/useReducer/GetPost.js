import React, { useEffect, useState } from 'react';
const GetPost = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setPost(data);
                setError('');
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError(err.message);
            })
    }, [])

    return (
        <div>
            {loading ? <img src='https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' alt='' /> : <ul>{post.title}</ul>}
            {/* {error ? error : null} */}

            {error || null}
        </div>
    );
};

export default GetPost;