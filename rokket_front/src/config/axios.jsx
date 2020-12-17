import axios from 'axios'

const articlesAxios = axios.create({
    baseURL: 'http://localhost:5000'
})

export default articlesAxios