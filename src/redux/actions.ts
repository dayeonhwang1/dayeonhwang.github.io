import { Page } from '../interfaces/page';

export const setPage = (page: Page) => ({
    type: 'SET_PAGE',
    payload: page,
});