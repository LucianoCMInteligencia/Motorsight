<template>
  <div class="row mb-3">
    <div class="col-md-4">
      <div class="card bg-primary text-white">
        <div class="card-body">
          <h6 class="card-title">Vehículos</h6>
          <h2>{{ stats?.vehicles || 0 }}</h2>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card bg-success text-white">
        <div class="card-body">
          <h6 class="card-title">Campañas</h6>
          <h2>{{ stats?.campaigns || 0 }}</h2>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card bg-warning text-dark">
        <div class="card-body">
          <h6 class="card-title">Leads</h6>
          <h2>{{ stats?.leads || 0 }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ stats: Object })
</script>
