export const SET_COUNTRIES = '@@country/SET_COUNTRIES'
export const SET_LOADING = '@@country/SET_LOADING'
export const SET_ERROR = '@@country/SET_ERROR'

export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries
})

export const setLoading = () => ({
    type: SET_LOADING,
})

