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
  async getVehicles() {
    try {
      const { data } = await api.get('/vehicles')
      return data
    } catch (e) {
      console.error('Error obteniendo vehículos:', e)
      return []
    }
  },
  async getVehicle(id) {
    const { data } = await api.get(`/vehicles/${id}`)
    return data
  },
  async createVehicle(payload) {
    const { data } = await api.post('/vehicles', payload)
    return data
  },
  async updateVehicle(id, payload) {
    const { data } = await api.put(`/vehicles/${id}`, payload)
    return data
  },
  async deleteVehicle(id) {
    return api.delete(`/vehicles/${id}`)
  },
  async getLeads() {
    const { data } = await api.get('/leads')
    return data
  },
  async createLead(payload) {
    const { data } = await api.post('/leads', payload)
    return data
  }
}
