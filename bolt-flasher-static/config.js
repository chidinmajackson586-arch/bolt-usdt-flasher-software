// API Configuration
const API_CONFIG = {
  // Development: http://localhost:5000
  // Production: Update to your deployed backend URL (e.g., https://bolt-api.render.com)
  BASE_URL: localStorage.getItem('apiUrl') || 'http://localhost:5000',
  
  // Override for production deployments
  setProduction: function(url) {
    localStorage.setItem('apiUrl', url);
  },
  
  // Reset to development
  setDevelopment: function() {
    localStorage.removeItem('apiUrl');
  }
};

// Endpoints
const API_ENDPOINTS = {
  signup: '/api/auth/signup',
  login: '/api/auth/login',
  getMe: '/api/auth/me',
  health: '/api/health'
};
