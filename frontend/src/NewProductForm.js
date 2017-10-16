import React, { Component } from 'react';

class NewProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ref: '',
            name: '',
            description: '',
            price: ''
        }
        /* this.state = {
            menu: ''
        }
        this.onChangeMenu = this.onChangeMenu.bind(this); */
    }

    /* onChangeMenu(menu) {
        this.setState({ menu: menu });
    } */

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state;

        fetch('/products/create', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: data
        }).then(response => {
            alert(response);
            const { onFinished } = this.props;
            onFinished();
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label for="ref"> ref </label>
                <input name="ref" type="text" onChange={this.onChange} />
                <label for="name"> name </label>
                <input name="name" type="text" onChange={this.onChange} />
                <label for="description"> description </label>
                <input name="description" type="text" />
                <label for="price"> price </label>
                <input name="price" type="number" step="0.1" min="0" onChange={this.onChange} />
                <button type="sumbit"> Send </button>
            </form>
        )
    }
}

export default NewProductForm;
