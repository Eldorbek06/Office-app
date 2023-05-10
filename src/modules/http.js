import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getData = async (path) => {
    const res = await axios.get(BASE_URL + path)

    return res
} 

export const postData = (path, body) => {
    return axios.post(BASE_URL + path, body)
} 

export const patchData = (path, id, body) => {
    return axios.patch(`${BASE_URL}${path}/${id}`, body)
}

export const delData = (path, id) => {
    return axios.delete(`${BASE_URL}${path}/${id}`)
} 