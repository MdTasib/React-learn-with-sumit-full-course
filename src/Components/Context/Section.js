import Content from './Content';
import React from 'react';

export default class Section extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log('section render')

        return (
            <div>
                <h1>This is section</h1>
                <Content />
            </div>
        )
    }
}