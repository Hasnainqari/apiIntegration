import axios from "axios";


// Get Request Mehtod
export const axiosGetRequest = async () => {
    const res = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
    });
    return res;
};

// Post Request Mehtod
export const axiosPostRequest = async (data) => {
    const res = await axios({
        method: 'Post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: data,
    });
    return res;
};


// Get Put Mehtod
export const axiosPutRequest = async (id, data) => {
    const res = await axios({
        method: 'Put',
        url: 'https://jsonplaceholder.typicode.com/posts/' + id,
        data: data,
    });
    return res;
};



// Get Patch Mehtod
export const axiosPatchRequest = async (id, data) => {
    const res = await axios({
        method: 'Patch',
        url: 'https://jsonplaceholder.typicode.com/posts/' + id,
        data: data,
    });
    return res;
};