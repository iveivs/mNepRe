export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state')
        if(savedState === null){
            return undefined
        }
        return JSON.parse(savedState)
    } catch (error) {
        
    }
}

export const saveState = (state) => {
    
}