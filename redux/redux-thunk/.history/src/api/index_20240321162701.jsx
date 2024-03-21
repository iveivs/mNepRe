export const client = async (endPoint, {body, ...customConfig}) => {
    const headers = {
        "Content-type": "application/json",
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            
        }
    }
}