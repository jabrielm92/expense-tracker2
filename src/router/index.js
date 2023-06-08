import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/components/DashboardPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegistrationPage from '@/components/RegistrationPage.vue'
import HomePage from '@/components/HomePage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import ChartComponent from '@/components/ChartComponent.vue'
import EditTransactions from '@/components/EditTransactions.vue'
import SetBudget from '@/components/SetBudget.vue'
import ViewBudget from '@/components/ViewBudget.vue'
import EditBudget from '@/components/EditBudget.vue'


import ExpenseForm from '@/components/ExpenseForm.vue'
import IncomeForm from '@/components/IncomeForm.vue'

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
    path: '/chart',
    name: 'ChartComponent',
    component: ChartComponent
  },
  {
    path: '/setbudget',
    name: 'SetBudget',
    component: SetBudget
  },
  {
    path: '/viewbudget',
    name: 'ViewBudget',
    component: ViewBudget
  },
  {
    path: '/editbudget',
    name: 'EditBudget',
    component: EditBudget
  },
  {
    path: '/edittransactions',
    name: 'EditTransactions',
    component: EditTransactions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
