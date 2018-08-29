export const SEARCH_API_REQUEST = 'SEARCH_API_REQUEST';
export const SEARCH_API_ERROR = 'SEARCH_API_ERROR';
export const SEARCH_API_SUCCESS = 'SEARCH_API_SUCCESS';

export const SET_PAGE = 'SET_PAGE';


export function searchAPi(query) {
    return { type: SEARCH_API_REQUEST, query }
}


export function setPage(page) {
    return { type: SET_PAGE, page }
}