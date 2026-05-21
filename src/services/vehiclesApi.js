import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3000' })

export default {
  async getVehicles(){ const { data } = await api.get('/vehicles'); return data },
  async getVehicle(id){ const { data } = await api.get(`/vehicles/${id}`); return data },
  async createVehicle(payload){ const { data } = await api.post('/vehicles', payload); return data },
  async updateVehicle(id,payload){ const { data } = await api.put(`/vehicles/${id}`, payload); return data },
  async deleteVehicle(id){ return api.delete(`/vehicles/${id}`) },
  async getLeads(){ const { data } = await api.get('/leads'); return data },
  async createLead(payload){ const { data } = await api.post('/leads', payload); return data }
}
