<template>
  <div>
    <h3>Marketplace</h3>
    <FiltersBar :vehicles="vehicles" @change="applyFilters" />

    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col" v-for="v in paged" :key="v.id">
        <VehicleCard :vehicle="v" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import VehicleCard from '../components/VehicleCard.vue'
import FiltersBar from '../components/FiltersBar.vue'
import vehiclesApi from '../services/vehiclesApi'

const vehicles = ref([])
const filters = ref({})

async function load(){ vehicles.value = await vehiclesApi.getVehicles() }
onMounted(load)

function applyFilters(f){ filters.value = f }

const filtered = computed(()=>{
  let list = vehicles.value.slice()
  if(filters.value.brand) list = list.filter(v=>v.brand===filters.value.brand)
  if(filters.value.fuel) list = list.filter(v=>v.fuel===filters.value.fuel)
  if(filters.value.location) list = list.filter(v=>v.location===filters.value.location)
  if(filters.value.maxPrice) list = list.filter(v=>v.price <= filters.value.maxPrice)
  if(filters.value.sort){
    if(filters.value.sort==='price_asc') list.sort((a,b)=>a.price-b.price)
    if(filters.value.sort==='price_desc') list.sort((a,b)=>b.price-a.price)
    if(filters.value.sort==='year_asc') list.sort((a,b)=>a.year-b.year)
    if(filters.value.sort==='year_desc') list.sort((a,b)=>b.year-a.year)
  }
  return list
})

const paged = computed(()=> filtered.value )
</script>
