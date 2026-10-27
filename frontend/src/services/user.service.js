import api from './api';

export const userService = {
  // Get user profile
  getUserProfile: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Update user profile
  updateUserProfile: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  // Get user's doubts
  getUserDoubts: async (id, params = {}) => {
    const response = await api.get(`/users/${id}/doubts`, { params });
    return response.data;
  },

  // Get user's answers
  getUserAnswers: async (id, params = {}) => {
    const response = await api.get(`/users/${id}/answers`, { params });
    return response.data;
  }
};

export const leaderboardService = {
  // Get leaderboard
  getLeaderboard: async (params = {}) => {
    const response = await api.get('/leaderboard', { params });
    return response.data;
  },

  // Get platform stats
  getPlatformStats: async () => {
    const response = await api.get('/leaderboard/stats');
    return response.data;
  }
};

export const tagService = {
  // Get all tags
  getTags: async (params = {}) => {
    const response = await api.get('/tags', { params });
    return response.data;
  },

  // Get tag suggestions
  getSuggestTags: async (query) => {
    const response = await api.get('/tags/suggest', { params: { query } });
    return response.data;
  }
};
