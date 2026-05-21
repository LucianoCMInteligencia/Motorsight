<template>
  <div class="card p-3 mb-3">
    <div class="row g-2">
      <div class="col-md-3">
        <select class="form-select" v-model="local.brand" @change="emitChange">
          <option value="">Todas las marcas</option>
          <option v-for="b in brands" :key="b" :value="b">{{ b }}</option>
        </select>
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model="local.fuel" @change="emitChange">
          <option value="">Combustible</option>
          <option value="Gasolina">Gasolina</option>
          <option value="Diésel">Diésel</option>
          <option value="Eléctrico">Eléctrico</option>
          <option value="Híbrido">Híbrido</option>
        </select>
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model="local.location" @change="emitChange">
          <option value="">Ubicación</option>
          <option v-for="l in locations" :key="l" :value="l">{{ l }}</option>
        </select>
      </div>
      <div class="col-md-3">
        <div class="input-group">
          <span class="input-group-text">Precio</span>
          <input type="number" class="form-control" placeholder="Máx" v-model.number="local.maxPrice" @input="emitChange">
        </div>
      </div>
      <div class="col-md-2 d-flex">
        <select class="form-select me-2" v-model="local.sort" @change="emitChange">
          <option value="">Orden</option>
          <option value="price_asc">Precio ↑</option>
          <option value="price_desc">Precio ↓</option>
          <option value="year_desc">Año ↓</option>
          <option value="year_asc">Año ↑</option>
        </select>
        <button class="btn btn-outline-secondary" @click="reset">Limpiar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, watch } from 'vue'
const props = defineProps({ vehicles: Array })
const emits = defineEmits(['change'])

const local = reactive({ brand:'', fuel:'', location:'', maxPrice:null, sort:'' })

const brands = [...new Set((props.vehicles||[]).map(v=>v.brand))]
const locations = [...new Set((props.vehicles||[]).map(v=>v.location))]

function emitChange(){ emits('change', { ...local }) }
function reset(){ local.brand=''; local.fuel=''; local.location=''; local.maxPrice=null; local.sort=''; emitChange() }

watch(()=>props.vehicles, ()=>{})
</script>
