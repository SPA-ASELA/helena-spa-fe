import axios from 'axios';
import { API_BASE_URL } from '@/utils/constants/api';

export default defineNuxtPlugin((nuxtApp) => {
    const apiClient = axios.create({
        baseURL: API_BASE_URL,
    });

    apiClient.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Correct way to provide axios
    nuxtApp.provide('axios', apiClient);
});