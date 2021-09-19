import React from 'react';
import { useParams } from 'react-router-dom';

const Posts = () => {
	const { category } = useParams();
	return <div>this is post - {category}</div>;
};

export default Posts;
