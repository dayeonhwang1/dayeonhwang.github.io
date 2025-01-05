import { Page } from '../interfaces/page';

const initialState = {
    currentPage: Page.Intro, // Default page
    // other state properties
};

interface Action {
    type: string;
    payload?: any;
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        // other cases
        default:
            return state;
    }
};

export default reducer;