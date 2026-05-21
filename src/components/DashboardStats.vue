<template>
  <div class="card p-3 mb-3">
    <h5>Métricas rápidas</h5>
    <div class="row text-center">
      <div class="col-4">
        <div class="h2">{{ stats.vehicles }}</div>
        <div class="text-muted small">Vehículos</div>
      </div>
      <div class="col-4">
        <div class="h2">{{ stats.campaigns }}</div>
        <div class="text-muted small">Campañas</div>
      </div>
      <div class="col-4">
        <div class="h2">{{ stats.leads }}</div>
        <div class="text-muted small">Leads</div>
      </div>
    </div>
    <div class="mt-3">
      <canvas ref="chart" height="80"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({ stats: Object })
const chart = ref(null)

onMounted(()=>{
  if(!chart.value) return
  new Chart(chart.value.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Vehículos','Campañas','Leads'],
      datasets: [{ data: [props.stats.vehicles, props.stats.campaigns, props.stats.leads], backgroundColor:['#0d6efd','#198754','#dc3545'] }]
    },
    options: { responsive:true, maintainAspectRatio:false }
  })
})
</script>
