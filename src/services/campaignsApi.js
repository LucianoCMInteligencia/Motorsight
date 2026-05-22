import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const api = axios.create({ baseURL: API_BASE })

// Manejo de errores global
api.interceptors.response.use(
  res => res,
  err => {
    console.error('API Error:', err.message)
    return Promise.reject(err)
  }
)

export default {
  async getCampaigns() {
    try {
      const { data } = await api.get('/campaigns')
      return data
    } catch (e) {
      console.error('Error obteniendo campañas:', e)
      return []
    }
  },
  async getCampaign(id) {
    const { data } = await api.get(`/campaigns/${id}`)
    return data
  },
  async createCampaign(payload) {
    const { data } = await api.post('/campaigns', payload)
    return data
  },
  async updateCampaign(id, payload) {
    const { data } = await api.put(`/campaigns/${id}`, payload)
    return data
  },
  async deleteCampaign(id) {
    return api.delete(`/campaigns/${id}`)
  }
}
