import axios from 'axios'

const getApi = axios.create({
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: "X-CSRFTOKEN",
    headers: {
        'X-CSRFToken': 'csrftoken',
    },
    baseURL: 'http://127.0.0.1:8000',
})

export default getApi