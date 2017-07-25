import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'

import Login from '../app/components/Login.vue'
import SchedulingRegister from '../app/components/SchedulingRegister.vue'
import PatientRegister from '../app/components/PatientRegister.vue'
import ProfessionalRegister from '../app/components/ProfessionalRegister.vue'
import Patients from '../app/components/Patients.vue'
import Professionals from '../app/components/Professionals.vue'

Vue.use(Router)

const meta = {
    requireAuth: true
}

const routes = [
    { name: 'home', path: '/', component: Login },
    { name: 'patients', path: '/auth/patients', component: Patients, meta },
    { name: 'professionals', path: '/auth/professionals', component: Professionals, meta },
    { name: 'consult', path: '/auth/scheduling', component: SchedulingRegister, meta },
    { name: 'patient', path: '/auth/patient', component: PatientRegister, meta },
    { name: 'professional', path: '/auth/professional', component: ProfessionalRegister, meta }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(beforeEach)

export default router