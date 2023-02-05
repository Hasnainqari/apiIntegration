export const getRequest = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const resinJson = await response.json();
    return resinJson;
}


export const postRequest = async (data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    });
    const resinJson = await response.json();
    return resinJson;
}

export const putRequest = async (id, data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    });
    const resinJson = await response.json();
    return resinJson;
}