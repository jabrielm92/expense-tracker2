<template>
  <div class="container">
    <h1 class="form-heading">Add Income</h1>
    <form class="income-form">
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
      console.log('Income submitted:', {
        name: this.name,
        amount: this.amount,
        category: this.category,
        date: this.date
      })
      const userId = auth.currentUser.uid;
      db.collection(`users/${userId}/income`).add({
        name: this.name,
        amount: this.amount,
        category: this.category,
        date: this.date
      }).then((docRef) => {
        console.log('Income added to Firestore');
        this.$emit('income-added', { id: docRef.id, name: this.name, amount: this.amount, category: this.category, date: this.date });
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

<style scoped>
.container {
  padding: 2rem;
}

.form-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.income-form {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out;
}

.income-form input[type="text"],
.income-form input[type="number"],
.income-form select,
.income-form input[type="date"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.income-form button[type="submit"] {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
}

.income-form button[type="submit"]:hover {
  background-color: #007bff;
  color: #fff;
}

.income-form input:focus,
.income-form select:focus,
.income-form input[type="date"]:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
