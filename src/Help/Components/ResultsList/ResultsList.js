import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import {Spinner} from '../../../Shared/Components/Spinner';
import styled from 'styled-components';


const List = styled.ul`
    list-style: none;
    margin: 40px 20px;
    padding:0px;
`



const ListItem = styled.li`
    color: #444444;
    font-family: sans-serif;
    font-size:16px;
    list-style: none;
    padding-bottom:20px;
    text-align:left;
`




const isHelpLoading = ({ help }) => {
    console.log(help, 'helping');
    return help.loading;
}

const withSpinnerWhileLoading = branch(
    isHelpLoading,
    renderComponent(Spinner)
);


const ResultsListItem = ({page}) =>  (
    <ListItem>
        <a href={page.url}>{page.title}</a>
        <p>{page.description}</p>
    </ListItem>
)

const ResultsList = (props) =>  (
    <div>
        <h4>Results for {props.help.query}</h4>
        <p>{props.help.paginator.page} of {props.help.paginator.total_pages}</p>
        <List>
            {props.help.paginator.data.map((page, index) => (
                <ResultsListItem key={index} page={page}/>
            ))}
        </List>
    </div>
)

const enhance = compose(
    withSpinnerWhileLoading
);

export default enhance(ResultsList)
