<template>
  <div>
    <h1>Add Expense</h1>
    <form @submit.prevent="addExpense">
      <label for="description">Description:</label>
      <input type="text" id="description" v-model="description">
      <br>
      <label for="category">Category:</label>
      <select id="category" v-model="category">
        <option v-for="c in categories" :value="c">{{ c }}</option>
      </select>
      <br>
      <label for="amount">Amount:</label>
      <input type="number" id="amount" v-model="amount">
      <br>
      <button type="submit">Add Expense</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data() {
    return {
      description: '',
      category: '',
      amount: 0,
      categories: ['Groceries', 'Utilities', 'Transportation', 'Housing', 'Entertainment']
    }
  },
  methods: {
    addExpense() {
      const db = firebase.firestore()
      db.collection('expenses').add({
        description: this.description,
        category: this.category,
        amount: Number(this.amount),
        date: firebase.firestore.Timestamp.fromDate(new Date())
      }).then(() => {
        this.$router.push('/expenses')
      }).catch(error => {
        console.error("Error adding expense: ", error);
      })
    }
  }
}
</script>

  