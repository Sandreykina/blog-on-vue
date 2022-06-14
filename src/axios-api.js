import axios from 'axios'

const getApi = axios.create({
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: "X-CSRFTOKEN",
    headers: {
        'X-CSRFToken': 'csrftoken',
    },
    baseURL: 'http://elenasandr.pythonanywhere.com/',
})

export default getApi