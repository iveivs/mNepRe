import { SET_FILTER } from './folters-const'

export const filters = (state = 'all', action) => ({
    type: SET_FILTER,
    filter,
})