<template>
  <div>
    <div class="mb-2">
      <input v-model="form.name" class="form-control" placeholder="Nombre de la campaña" required />
    </div>
    <div class="mb-2">
      <input v-model.number="form.budget" type="number" class="form-control" placeholder="Presupuesto" required />
    </div>
    <div class="mb-2">
      <input v-model="form.startDate" type="date" class="form-control" required />
    </div>
    <div class="mb-2">
      <input v-model="form.endDate" type="date" class="form-control" required />
    </div>
    <div class="mb-2">
      <select v-model="form.status" class="form-select">
        <option value="active">Activa</option>
        <option value="paused">Pausada</option>
      </select>
    </div>
    <div class="d-flex gap-2">
      <button @click="save" class="btn btn-primary">Guardar</button>
      <button @click="cancel" class="btn btn-secondary">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ modelValue: Object })
const emits = defineEmits(['save', 'cancel'])

const form = ref({ name: '', budget: 0, startDate: '', endDate: '', status: 'active' })

watch(() => props.modelValue, (val) => {
  if (val) form.value = { ...val }
}, { immediate: true })

function save() {
  emits('save', { ...form.value, id: form.value.id || Date.now() })
}

function cancel() {
  emits('cancel')
}
</script>
