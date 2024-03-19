export const ADD_POSITIONS = 'ADD_POSITIONS';

export const addPositions = (positions) => {
    console.log('POSITION', positions)
    return {
        type: ADD_POSITIONS,
        positions,
    }
}
        
