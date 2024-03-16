export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state')
        if(savedState === null){
            return undefined
        }
        return JS
    } catch (error) {
        
    }
}

export const saveState = (state) => {
    
}