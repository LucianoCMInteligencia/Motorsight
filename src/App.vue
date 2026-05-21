<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#/">Motorsight</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Marketplace</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/campaigns">Campañas</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/dashboard">Dashboard</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container my-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// Composición simple: App contiene el layout y router-view
</script>

<style>
body { background: #f8f9fa; }
</style>
