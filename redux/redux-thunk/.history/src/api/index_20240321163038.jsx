export const client = async (endPoint, {body, ...customConfig}) => {
    const headers = {
        "Content-type": "application/json",
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }

    if(body) {
        config.body = JSON.stringify(body)
    }

    try {
        const response = await fetch(endPoint, config)
        if(response.ok) throw new Err
    } catch (error) {
        
    }
}