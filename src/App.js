import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import qs from 'query-string';

import {SearchForm} from './Help/Components/SearchForm/SearchForm';
import ResultsList from './Help/Components/ResultsList/ResultsList';
import { searchAPi, setPage } from './Help/actions';
import {Paginator} from './Help/Components/Paginator/Paginator';


const Wrapper = styled.div`
    color:#444444;
    margin:0;
    padding:0;
    width:100%;
`;

const Content = styled.div`
    align-content:center;
    display:flex;
    flex-direction: column;
    max-width: 1000px;
    padding:60px;
    text-align:center;
`;

const Header = styled.header`
    background: linear-gradient(90deg, #0644a1, #862e81);
    border-bottom: 1px solid #ccc;
    color:white;
    padding:5px 20px;
    width:100%;
`;

const mapDispatchToProps = {
    searchAPi,
    setPage
};

const mapStateToProps = (state) => {
    return {
        help: state.help
    }
}

class App extends Component {


    handleSubmit = (values, e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.history.push({
            pathname: '/',
            search: `?query=${values.query}`
        })
    }


    updatePage = (pageNumber) => {
        this.props.setPage(pageNumber);
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            let query = qs.parse(location.search).query;
            if (query) {
                this.props.searchAPi(query);
            }
        });

        let query = qs.parse(this.props.location.search).query;
        if (query) {
            this.props.searchAPi(query);
        }
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const props = this.props;
        return (
          <Wrapper>
              <Header>
                  <h1 className="App-title">Sky help</h1>
              </Header>

              <Content>
                <SearchForm {...props} onSubmit={this.handleSubmit}/>
                <ResultsList {...props}/>
                <Paginator {...props} updatePage={this.updatePage}/>
              </Content>
          </Wrapper>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

