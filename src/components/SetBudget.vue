<template>
  <div class="set-budget">
    <h2>Set Budget</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="budgetAmount">Budget Amount:</label>
        <input type="number" id="budgetAmount" v-model="budgetAmount" required>
      </div>
      <div class="form-group">
        <label for="budgetPeriod">Budget Period:</label>
        <select id="budgetPeriod" v-model="budgetPeriod" required>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div class="form-group">
        <label for="startDate">Start Date:</label>
        <input type="date" id="startDate" v-model="startDate" required>
      </div>
      <div class="form-group">
        <label for="endDate">End Date:</label>
        <input type="date" id="endDate" v-model="endDate" required>
      </div>
      <button type="submit">Set Budget</button>
    </form>
  </div>
</template>

<script>
import { db } from '../firebase'

export default {
  data() {
    return {
      budgetAmount: 0,
      budgetPeriod: 'week',
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    async submitForm() {
      const budget = {
        amount: this.budgetAmount,
        period: this.budgetPeriod,
        startDate: this.startDate,
        endDate: this.endDate
      }
      try {
        const docRef = await db.collection('budgets').add(budget)
        console.log('Budget added with ID: ', docRef.id)
        this.budgetAmount = 0
        this.budgetPeriod = 'week'
        this.startDate = ''
        this.endDate = ''
      } catch (error) {
        console.error('Error adding budget: ', error)
      }
    }
  }
}
</script>

<style scoped>
.set-budget {
  max-width: 400px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input[type="number"],
select,
input[type="date"] {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
}
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
