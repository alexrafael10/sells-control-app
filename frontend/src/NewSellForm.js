import React, { Component } from 'react';

class NewSellForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            clients: []
        }
        this.data = {}

    }

    componentWillMount(){
        fetch('/clients').then((response => {
            return response.json()
        })).then(clients => {

            fetch('/products').then((response => {
                return response.json()
            })).then(products => {
                this.setState( {clients: clients, products: products});
            })
        })
    }

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
                <label for="client"> client </label>
                <select name="client" onChange={this.onChange}>
                    { this.state.clients.map((client) => {
                        return <option key={client.id} value={client.id}> {client.name} {client.last_name} </option>
                    })}
                </select>
                <label for="product"> product </label>
                <select name="product" onChange={this.onChange}>
                    {this.state.products.map((product) => {
                        return <option key={product.id} value={product.id}> {product.ref} {product.name} </option>
                    })}
                </select>

                <label for="payment"> payment </label>
                <select name="payment">
                    <option value="credit"> credit </option>
                    <option value="debit"> debit </option>
                    <option value="cash"> cash </option>
                </select>
                <label for="comment"> comment </label>
                <textarea name="name" onChange={this.onChange} />
                <button type="sumbit"> Send </button>
            </form>
        )
    }
}

export default NewSellForm;
