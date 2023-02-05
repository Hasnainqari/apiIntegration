import axios from "axios";

export const axiosGetRequest = async () => {
    const res = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
    });
    return res;
};

export const axiosPostRequest = async (data) => {
    const res = await axios({
        method: 'Post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: data,
    });
    return res;
};

export const axiosPutRequest = async (id, data) => {
    const res = await axios({
        method: 'Put',
        url: 'https://jsonplaceholder.typicode.com/posts/' + id,
        data: data,
    });
    return res;
};

export const axiosPatchRequest = async (id, data) => {
    const res = await axios({
        method: 'Patch',
        url: 'https://jsonplaceholder.typicode.com/posts/' + id,
        data: data,
    });
    return res;
};