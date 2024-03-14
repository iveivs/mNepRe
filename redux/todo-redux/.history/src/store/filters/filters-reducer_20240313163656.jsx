import { SET_FILTER } from './folters-const'

export const filters = (filter) => ({
    type: SET_FILTER,
    filter,
})