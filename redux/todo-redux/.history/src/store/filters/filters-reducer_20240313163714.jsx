import { SET_FILTER } from './folters-const'

export const filters = (state = 'all',) => ({
    type: SET_FILTER,
    filter,
})