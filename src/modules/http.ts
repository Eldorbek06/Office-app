import axios from "axios"

const BASE_URL: string = import.meta.env.VITE_BASE_URL

export const getData = async (path: string) => {
    const res = await axios.get(BASE_URL + path)
    
    return res
} 