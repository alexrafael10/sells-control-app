import React, { Component } from 'react';

class NewClientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            document_id: '',
            name: '',
            last_name: '',
            address: ''
        }
        /* this.state = {
            menu: ''
        }
        this.onChangeMenu = this.onChangeMenu.bind(this); */
    }

    /* onChangeMenu(menu) {
        this.setState({ menu: menu });
    } */

    onChange = (e) =>{
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state;

        fetch('/clients/create', {
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
                <label for="document_id"> document_id </label>
                <input name="document_id" type="text"  onChange={this.onChange}/>
                <label for="name"> name </label>                
                <input name="name" type="text"  onChange={this.onChange}/>
                <label for="last_name"> last_name </label>
                <input name="last_name" type="text" />
                <label for="address"> address </label>
                <input name="address" type="text" onChange={this.onChange}/>
                <button type="sumbit"> Send </button>
            </form>
        )
    }
}

export default NewClientForm;
