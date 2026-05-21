<template>
  <div>
    <button class="btn btn-link mb-2" @click="$router.back()">← Volver</button>
    <div v-if="vehicle" class="row">
      <div class="col-md-6">
        <img :src="vehicle.image || ('https://picsum.photos/seed/veh-'+vehicle.id+'/900/600')" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h3>{{ vehicle.brand }} {{ vehicle.model }}</h3>
        <p><strong>Precio:</strong> ${{ vehicle.price.toLocaleString() }}</p>
        <p><strong>Año:</strong> {{ vehicle.year }} • <strong>KMs:</strong> {{ vehicle.km }}</p>
        <p><strong>Combustible:</strong> {{ vehicle.fuel }}</p>
        <p><strong>Ubicación:</strong> {{ vehicle.location }}</p>

        <h5 class="mt-4">Solicitar información</h5>
        <form @submit.prevent="requestInfo">
          <div class="mb-2"><input v-model="lead.name" class="form-control" placeholder="Tu nombre" required /></div>
          <div class="mb-2"><input v-model="lead.email" type="email" class="form-control" placeholder="Tu correo" required /></div>
          <div class="mb-2"><textarea v-model="lead.message" class="form-control" rows="3" placeholder="Mensaje"></textarea></div>
          <button class="btn btn-primary">Enviar solicitud</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import vehiclesApi from '../services/vehiclesApi'

const route = useRoute()
const vehicle = ref(null)
const lead = ref({ name:'', email:'', message:'' })

async function load(){ vehicle.value = await vehiclesApi.getVehicle(route.params.id) }
onMounted(load)

async function requestInfo(){
  await vehiclesApi.createLead({ ...lead.value, vehicleId: vehicle.value.id, createdAt: new Date().toISOString() })
  alert('Solicitud enviada (simulado).')
  lead.value = { name:'', email:'', message:'' }
}
</script>
