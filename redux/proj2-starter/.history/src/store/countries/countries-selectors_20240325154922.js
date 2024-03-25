export const selectCountriesI = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length
})