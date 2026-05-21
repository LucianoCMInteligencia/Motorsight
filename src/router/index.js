import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehicleDetailView from '../views/VehicleDetailView.vue'
import DashboardView from '../views/DashboardView.vue'
import CampaignsView from '../views/CampaignsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/vehicle/:id', name: 'vehicle', component: VehicleDetailView, props: true },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },
  { path: '/campaigns', name: 'campaigns', component: CampaignsView }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
