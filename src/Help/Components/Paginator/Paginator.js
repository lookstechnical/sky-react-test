import React from 'react';
import styled from 'styled-components';

const Nextlink = styled.a`
    float:right;
    cursor:pointer;
    
    :hover {
        color: blue
    }
`;

const PrevLink = styled.a`
    float:left;
    cursor:pointer;
    
    :hover {
        color: blue
    }
`;

export const Paginator = ({help, updatePage,...props}) => (
    <div>
        {help.paginator.prev_page >= 0 && (
            <PrevLink onClick={(e) => updatePage(help.paginator.prev_page)} >Previous page</PrevLink>
        )}

        {help.paginator.next_page && (
            <Nextlink onClick={(e) => updatePage(help.paginator.next_page)} >Next page</Nextlink>
        )}
    </div>
)



