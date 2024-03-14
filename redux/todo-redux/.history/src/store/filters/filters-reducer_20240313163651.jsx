import { SET_FILTER } from './folters-const'

export const seilter = (filter) => ({
    type: SET_FILTER,
    filter,
})