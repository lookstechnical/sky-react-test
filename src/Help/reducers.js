import {SEARCH_API_ERROR, SEARCH_API_REQUEST, SEARCH_API_SUCCESS, SET_PAGE} from './actions';

const initialState = {
    paginator: {
        page:0,
        per_page:10,
        pre_page: null,
        next_page: null,
        total: 0,
        total_pages:0,
        data: []
    },
    results: [],
    loading: false,
    query: null
}

const paginateItems = (items, page, per_page) => {

    var offset = (page - 1) * per_page,
        paginatedItems = items.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(items.length / per_page);

    return {
        page: page,
        per_page: per_page,
        prev_page: page - 1 ? page - 1 : null,
        next_page: (total_pages > page) ? page + 1 : null,
        total: items.length,
        total_pages: total_pages,
        data: paginatedItems
    };
}

export function helpReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_API_REQUEST:
            return {
                ...state,
                loading: true,
                query: action.query,
            };
        case SEARCH_API_SUCCESS:
            return {
                ...state,
                results: action.response.data.results,
                paginator: paginateItems(action.response.data.results, 0, 10),
                loading: false
            };
        case SEARCH_API_ERROR:
            return {
                ...state,
                loading: false
            };
        case SET_PAGE:
            return {
                ...state,
                paginator: paginateItems(state.results, action.page, 10),
                loading: false
            };
        default:
            return state;
    }
}