<template>
  <div class="container">
    <h1>Edit Expense</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="expense.name" placeholder="Enter expense name">
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" class="form-control" id="amount" v-model="expense.amount" placeholder="Enter expense amount">
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" id="category" v-model="expense.category">
          <option v-for="cat in categories" :key="cat">{{cat}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date" v-model="expense.date">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="updateExpense()">Update</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'ExpenseForm',
  data() {
    return {
      expense: {
        name: '',
        amount: null,
        category: '',
        date: ''
      },
      categories: ['Housing', 'Transportation', 'Food', 'Utilities', 'Insurance', 'Personal', 'Debt', 'Entertainment', 'Other'],
      expenseId: this.$route.params.id
    }
  },
  methods: {
    async updateExpense() {
      const db = firebase.firestore()
      try {
        const expenseRef = db.collection('expenses').doc(this.expenseId)
        await expenseRef.update(this.expense)
        this.$router.push({ name: 'ViewExpense', params: { id: this.expenseId } })
      } catch (error) {
        console.error(error)
      }
    },
    async fetchExpense() {
      const db = firebase.firestore()
      try {
        const expenseRef = db.collection('expenses').doc(this.expenseId)
        const expenseDoc = await expenseRef.get()
        if (expenseDoc.exists) {
          this.expense = expenseDoc.data()
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.fetchExpense()
  }
}
</script>
