import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Card.css"
import axios from "axios";
class Form extends Component {
    state = {userName:''};
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(res.data);

    }

    render() {
        return (
            <div className='card'>
                <form onSubmit={this.handleSubmit} className='form-card' action=''>
                    <input 
                        type='text' 
                        value={this.state.userName}
                        onChange={event =>this.setState({userName:event.target.value})}
                        placeholder='username' 
                        required
                    />
                    <button>Add Cart</button>
                </form>
            </div>
        );
    }
}


export default Form;