import { useNuxtApp } from '#app';

export const apiService = {
    async request(endpoint, data = {}, params = {}) {
        const nuxtApp = useNuxtApp(); // Ensure this is correctly used
        const apiClient = nuxtApp.$axios; // Access axios instance
        
        if (!apiClient) {
            console.error("Axios instance is not available.");
            return;
        }

        let url = endpoint.url;

        // Replace URL parameters
        if (params.id) {
            url = url.replace(':id', params.id);
        }

        const config = {
            method: endpoint.method,
            url: url,
            data,
        };

        // Handle query parameters
        if (Object.keys(params).length > 0) {
            const queryString = new URLSearchParams(params).toString();
            config.url += `?${queryString}`;
        }

        try {
            const response = await apiClient(config);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
};