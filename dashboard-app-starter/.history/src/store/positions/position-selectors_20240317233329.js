export const selectAllPositions = (state) => {
    console.log('TEST 2');
    console.log(object);
    return state.positions};

export const selectVisiblePositions = (state, filters = []) => {
    if(filters.length === 0) return state.positions

    return state.positions.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level,  ...pos.languages, ...pos.tools)

        return filters.every(filter => posFilters.includes(filter))
    })
}