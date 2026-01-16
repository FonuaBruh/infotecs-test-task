import { API_CONFIG } from './apiConfig';

export const usersApi = {
  async getUsers({ page = 1, sortBy = null, order = 'none', limit = API_CONFIG.DEFAULT_PARAMS.LIMIT }) {
    try {
      const skip = (page - 1) * limit;
      const params = new URLSearchParams({
        limit: limit.toString(),
        skip: skip.toString()
      });

      if (sortBy && order !== 'none') {
        params.append('sortBy', sortBy);
        params.append('order', order);
      }

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}?${params.toString()}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Ошибка API:', error);
      throw error;
    }
  }
};