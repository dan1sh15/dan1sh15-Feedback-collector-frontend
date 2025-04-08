const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Update with your backend URL

const api = {
  async submitFeedback(data) {
    const response = await fetch(`${API_BASE_URL}/submit-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to submit feedback');
    }
    
    return await response.json();
  },
  
  async getFeedbacks(page = 0, perPage = 10) {
    const response = await fetch(
      `${API_BASE_URL}/feedbacks?page=${page}&perPage=${perPage}`
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch feedbacks');
    }
    
    return await response.json();
  }
};

export default api;