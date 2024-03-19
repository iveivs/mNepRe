export const selectAllPositions = (state) => state.selectAllPositions
export const selectМшышидуPositions = (state, filters = []) => {
    if(filters.length === 0) return state.positions

    return state.positions.filter(pos => {
        const posFilters = [].concat
    })
}