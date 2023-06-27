import axios from 'axios';

const Api_url = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: Api_url,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response);
    },
    function (error) {
        return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data };
    } else {
        return { isFailure: true, status: response.status, msg: response.msg, code: response.code };
    }
}

const processError = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data };
    } else {
        return { isFailure: true, status: response.status, msg: response.msg, code: response.code };
    }
}