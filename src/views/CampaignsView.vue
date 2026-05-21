<template>
  <div>
    <h3>Campañas</h3>
    <div class="row">
      <div class="col-md-6">
        <div class="card p-3">
          <h5>Lista de campañas</h5>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="c in campaigns" :key="c.id">
              <div>
                <strong>{{ c.name }}</strong>
                <div class="small text-muted">Presupuesto: ${{ c.budget }}</div>
              </div>
              <div>
                <button class="btn btn-sm btn-outline-primary me-2" @click="startEdit(c)">Editar</button>
                <button class="btn btn-sm btn-danger" @click="del(c)">Eliminar</button>
              </div>
            </li>
          </ul>
          <div class="mt-3">
            <button class="btn btn-success" @click="creating=true">Nueva campaña</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card p-3">
          <h5 v-if="!creating && !editing">Detalles</h5>
          <div v-if="creating">
            <h6>Crear campaña</h6>
            <CampaignForm @save="create" @cancel="creating=false" />
          </div>
          <div v-if="editing">
            <h6>Editar campaña</h6>
            <CampaignForm :modelValue="current" @save="update" @cancel="stopEdit" />
          </div>
          <div v-if="!creating && !editing">
            <p>Selecciona una campaña o crea una nueva.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CampaignForm from '../components/CampaignForm.vue'
import campaignsApi from '../services/campaignsApi'

const campaigns = ref([])
const creating = ref(false)
const editing = ref(false)
const current = ref(null)

async function load(){ campaigns.value = await campaignsApi.getCampaigns() }
onMounted(load)

async function create(c){ await campaignsApi.createCampaign(c); creating.value=false; load() }
function startEdit(c){ current.value = { ...c }; editing.value=true }
function stopEdit(){ editing.value=false; current.value=null }
async function update(c){ await campaignsApi.updateCampaign(c.id, c); stopEdit(); load() }
async function del(c){ if(confirm('Eliminar campaña?')){ await campaignsApi.deleteCampaign(c.id); load() } }
</script>
