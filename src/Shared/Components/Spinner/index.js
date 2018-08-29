import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
    -webkit-animation: spin 1s ease-in-out infinite;
    animation: spin 1s ease-in-out infinite;
    border-radius: 50%;
    border-top-color: #000;
    border: 3px solid rgba(0,0,0,.3);
    display: inline-block;
    height: 50px;
    width: 50px;
`;

export const Spinner = (props) => (
    <StyledSpinner></StyledSpinner>
)