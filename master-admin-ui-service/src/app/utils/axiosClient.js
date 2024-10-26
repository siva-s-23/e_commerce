import axios from 'axios';

// Function to create an Axios client with a dynamic base URL
const createAxiosClient = (baseURL) => {
    const axiosClient = axios.create({
        baseURL: baseURL || process.env.NEXT_PUBLIC_API_URL,
        timeout: 10000, // Request timeout
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Request interceptor
    axiosClient.interceptors.request.use(
        (config) => {
            // Add any necessary request modifications (e.g., auth tokens)
            // const token = localStorage.getItem('token');
            // if (token) {
            //     config.headers['Authorization'] = `Bearer ${token}`;
            // }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response interceptor
    axiosClient.interceptors.response.use(
        (response) => response,
        (error) => {
            // Handle response errors centrally
            if (error.response) {
                console.error('API Error:', error.response.data);
            }
            return Promise.reject(error);
        }
    );

    // Method to make GET requests with internal try-catch
    const get = async (url, config = {}) => {
        try {
            const response = await axiosClient.get(url, config);
            return { data: response.data, error: null };
        } catch (error) {
            return { data: null, error: error.response?.data || error.message };
        }
    };

    // Method to make POST requests with internal try-catch
    const post = async (url, data, config = {}) => {
        try {
            const response = await axiosClient.post(url, data, config);
            return { data: response.data, error: null };
        } catch (error) {
            return { data: null, error: error.response?.data || error.message };
        }
    };

    return {
        get,
        post,
    };
};

export default createAxiosClient;
