export const selectCountries = (state) => ({
    status: state.countries.list,
    error: state.countries.list
})