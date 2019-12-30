import axios from 'axios'

const axiosGithubUsers = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export default axiosGithubUsers