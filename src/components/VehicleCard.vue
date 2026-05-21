<template>
  <div class="card h-100 card-small">
    <img :src="imageUrl" class="card-img-top vehicle-image" :alt="vehicle.brand + ' ' + vehicle.model" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ vehicle.brand }} {{ vehicle.model }}</h5>
      <p class="card-text mb-1"><strong>Precio:</strong> ${{ formatPrice(vehicle.price) }}</p>
      <p class="card-text mb-1"><strong>KMs:</strong> {{ vehicle.km }} • <strong>Año:</strong> {{ vehicle.year }}</p>
      <p class="card-text text-muted small">{{ vehicle.location }} • {{ vehicle.fuel }}</p>
      <div class="mt-auto d-flex gap-2">
        <router-link :to="`/vehicle/${vehicle.id}`" class="btn btn-primary btn-sm">Ver</router-link>
        <button v-if="showAdmin" @click="$emit('edit', vehicle)" class="btn btn-outline-secondary btn-sm">Editar</button>
        <button v-if="showAdmin" @click="$emit('delete', vehicle)" class="btn btn-danger btn-sm">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ vehicle: Object, showAdmin: { type: Boolean, default: false } })
const emits = defineEmits(['edit','delete'])

const imageUrl = computed(() => {
  return props.vehicle.image || `https://picsum.photos/seed/veh-${props.vehicle.id}/800/500`
})

function formatPrice(value){ return Number(value).toLocaleString() }
</script>
