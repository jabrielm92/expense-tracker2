import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/components/DashboardPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegistrationPage from '@/components/RegistrationPage.vue'
import HomePage from '@/components/HomePage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import ChartComponent from '@/components/ChartComponent.vue'

import ExpenseForm from '@/components/ExpenseForm.vue'
import IncomeForm from '@/components/IncomeForm.vue'
import ViewBudget from '@/views/ViewBudget.vue'
import ViewReminders from '@/views/ViewReminders.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegistrationPage
  },
  {
    path: '/expenses',
    name: 'ExpenseForm',
    component: ExpenseForm
  },
  {
    path: '/income',
    name: 'IncomeForm',
    component: IncomeForm
  },
  {
    path: '/budget',
    name: 'ViewBudget',
    component: ViewBudget
  },
  {
    path: '/chart',
    name: 'ChartComponent',
    component: ChartComponent
  },
  {
    path: '/reminders',
    name: 'ViewReminders',
    component: ViewReminders
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
