import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'javascript',
        text: 'javascript is awesome',
        select: 'React',
        check: true,
    }

    handleChange = e => {
        // console.log(e.target.value);
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            })
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            })
        } else if (e.target.type === 'select-one') {
            this.setState({
                select: e.target.value,
            })
        } else if (e.target.type === 'checkbox') {
            this.setState({
                check: e.target.checked,
            })
        } else {
            console.log('nothing here');
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { title, text, select, check } = this.state;
        console.log(title, text, select, check);
    }

    render() {
        const { title, text, select, check } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Your Name" value={title} onChange={this.handleChange} /><br /><br />

                    <textarea name="text" value={text} onChange={this.handleChange}></textarea><br /><br />

                    <select value={select} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select><br /><br />

                    <input type="checkbox" checked={check} onChange={this.handleChange} /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
                <p>Form value: {title}</p>
                <p>Textarea value: {text}</p>
            </div>
        )
    }
}