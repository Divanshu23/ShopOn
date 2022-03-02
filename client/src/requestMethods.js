import axios from "axios"

const BASE_URL = "http://localhost:8888/api/v1/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWRhNDA4MzFiNzU0OWYyMzkwODJlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjEyMTY3MiwiZXhwIjoxNjQ2MzgwODcyfQ.Iowq8MhoXy-1XyEQyzqncO8ShJZWQvMjcpqLeJkyg44"

//For fetching just use public access
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})