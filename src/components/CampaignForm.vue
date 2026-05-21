<template>
  <form @submit.prevent="submit">
    <div class="mb-2">
      <label class="form-label">Nombre</label>
      <input v-model="local.name" class="form-control" required />
    </div>
    <div class="row g-2">
      <div class="col">
        <label class="form-label">Presupuesto</label>
        <input type="number" v-model.number="local.budget" class="form-control" />
      </div>
      <div class="col">
        <label class="form-label">Estado</label>
        <select v-model="local.status" class="form-select">
          <option value="active">Activa</option>
          <option value="paused">Pausada</option>
          <option value="finished">Finalizada</option>
        </select>
      </div>
    </div>
    <div class="mt-3 d-flex gap-2">
      <button class="btn btn-primary" type="submit">Guardar</button>
      <button type="button" class="btn btn-outline-secondary" @click="$emit('cancel')">Cancelar</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
const props = defineProps({ modelValue: Object })
const emits = defineEmits(['save','cancel'])

const local = reactive({ id: null, name:'', budget:0, status:'active' })
if(props.modelValue) Object.assign(local, props.modelValue)

function submit(){ emits('save', { ...local }) }
</script>
