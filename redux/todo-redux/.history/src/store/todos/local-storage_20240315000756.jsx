export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state')
        if(savedState === null){
            return undefined
        }
        return 
    } catch (error) {
        
    }
}

export const saveState = (state) => {
    
}