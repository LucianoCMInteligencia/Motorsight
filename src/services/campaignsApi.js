import axios from 'axios'
const api = axios.create({ baseURL: 'http://localhost:3000' })

export default {
  async getCampaigns(){ const { data } = await api.get('/campaigns'); return data },
  async getCampaign(id){ const { data } = await api.get(`/campaigns/${id}`); return data },
  async createCampaign(payload){ const { data } = await api.post('/campaigns', payload); return data },
  async updateCampaign(id,payload){ const { data } = await api.put(`/campaigns/${id}`, payload); return data },
  async deleteCampaign(id){ return api.delete(`/campaigns/${id}`) }
}
