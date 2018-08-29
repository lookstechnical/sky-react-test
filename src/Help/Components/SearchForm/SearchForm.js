import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border:1px solid #888888;
    font-size:16px;
    padding:16px;
    width:90%;
`;

const Button = styled.button`
    background-color: #0644a1;
    border:0px;
    color:white;
    font-size:16px;
    padding:16px;
`

export class SearchForm extends Component {

    constructor() {
        super();

        this.state = {
            query: ''
        };
    }

    handleChange = (e) => {

        this.setState({query: e.target.value})
    };

    render() {
        const {placeholder, onSubmit} = this.props;
        return (
            <form onSubmit={(e) => onSubmit(this.state, e)}>
                <Input type="search" name='query' placeholder={placeholder} onChange={this.handleChange}
                       value={this.state.query}/>
                <Button type="submit">Search</Button>
            </form>
        )
    }
}



