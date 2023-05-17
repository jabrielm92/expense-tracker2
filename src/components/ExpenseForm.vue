<template>
  <div class="container">
    <h1>Add Expense</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter expense name">
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" class="form-control" id="amount" v-model="amount" placeholder="Enter expense amount">
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" id="category" v-model="category">
          <option v-for="cat in categories" :key="cat">{{cat}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date" v-model="date">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submitExpense()">Submit</button>
    </form>
  </div>
</template>
<script>
import { db, auth } from "@/firebase.js";

export default {
  name: 'ExpenseForm',
  data() {
    return {
      name: '',
      amount: null,
      category: '',
      date: '',
      categories: ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Other']
    }
  },
  methods: {
    submitExpense() {
      console.log('Expense submitted:', {
        name: this.name,
        amount: this.amount,
        category: this.category,
        date: this.date
      })
      const userId = auth.currentUser.uid;
      db.collection(`users/${userId}/expenses`).add({
        name: this.name,
        amount: this.amount,
        category: this.category,
        date: this.date
      }).then((docRef) => {
        console.log('Expense added to Firestore');
        this.$emit('expense-added', { id: docRef.id, name: this.name, amount: this.amount, category: this.category, date: this.date });
      }).catch((error) => {
        console.error('Error adding expense to Firestore:', error);
      });

      this.name = ''
      this.amount = null
      this.category = ''
      this.date = ''
    }
  }
}
</script>

