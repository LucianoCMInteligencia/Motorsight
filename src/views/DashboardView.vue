<template>
  <div>
    <h3>Dashboard - Marketing / Ventas</h3>
    <DashboardStats :stats="stats" />

    <div class="card p-3">
      <h5>Vehículos (Admin)</h5>
      <div class="mb-2 d-flex gap-2">
        <button class="btn btn-success" @click="createRandomVehicle">Crear vehículo demo</button>
      </div>
      <div class="list-group">
        <div class="list-group-item d-flex justify-content-between align-items-center" v-for="v in vehicles" :key="v.id">
          <div>
            <strong>{{ v.brand }} {{ v.model }}</strong> — ${{ v.price.toLocaleString() }} • {{ v.location }}
          </div>
          <div>
            <button class="btn btn-sm btn-outline-primary me-2" @click="edit(v)">Editar</button>
            <button class="btn btn-sm btn-danger" @click="remove(v)">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DashboardStats from '../components/DashboardStats.vue'
import vehiclesApi from '../services/vehiclesApi'
import campaignsApi from '../services/campaignsApi'

const vehicles = ref([])
const campaigns = ref([])
const leads = ref([])

async function load(){
  vehicles.value = await vehiclesApi.getVehicles()
  campaigns.value = await campaignsApi.getCampaigns()
  leads.value = await vehiclesApi.getLeads()
}
onMounted(load)

const stats = computed(()=>({ vehicles: vehicles.value.length, campaigns: campaigns.value.length, leads: leads.value.length }))

function createRandomVehicle(){
  const id = Date.now()
  const demo = { id, brand:'Demo', model:'X'+(id%100), price:20000, year:2019, km:50000, location:'Madrid', fuel:'Gasolina' }
  vehiclesApi.createVehicle(demo).then(load)
}

function edit(v){ const newPrice = parseInt(prompt('Nuevo precio', v.price)) || v.price; vehiclesApi.updateVehicle(v.id, { ...v, price:newPrice }).then(load) }
function remove(v){ if(confirm('Eliminar vehículo?')) vehiclesApi.deleteVehicle(v.id).then(load) }
</script>
