<template>
  <div class="container">
    <h1>Add Income</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter income name">
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" class="form-control" id="amount" v-model="amount" placeholder="Enter income amount">
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
      <button type="submit" class="btn btn-primary" @click.prevent="submitIncome()">Submit</button>
    </form>
  </div>
</template>
<script>
import { db, auth } from "@/firebase.js";

export default {
  name: 'IncomeForm',
  data() {
    return {
      name: '',
      amount: null,
      category: '',
      date: '',
      categories: ['Salary', 'Investments', 'Freelance', 'Other']
    }
  },
  methods: {
    submitIncome() {
      // Add logic to submit expense data to backend or store
      console.log('Income submitted:', {
        name: this.name,
        amount: this.amount,
        category: this.category,
        date: this.date
      })
      // Get the current user's ID
      const userId = auth.currentUser.uid;
      // Save income to Firestore using the user's ID as part of the collection path
      db.collection(`users/${userId}/income`).add({
        name: this.name,
        amount: this.amount,
        category: this.category,
        date: this.date
      }).then((docRef) => {
        console.log('Income added to Firestore');
        // Emit an event to send the expense data to DashboardPage
        this.$emit('income-added', { id: docRef.id, name: this.name, amount: this.amount, category: this.category, date: this.date });
      }).catch((error) => {
        console.error('Error adding expense to Firestore:', error);
      });

      // Clear form fields
      this.name = ''
      this.amount = null
      this.category = ''
      this.date = ''
    }
  }
}
</script>
