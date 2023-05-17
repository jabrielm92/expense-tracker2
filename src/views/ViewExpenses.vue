<template>
  <div class="container">
    <h2 class="text-center my-4">View Expenses</h2>
    <div class="row my-4">
  <div class="col-md-4 offset-md-4">
    <select class="form-control" v-model="selectedCategory">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
    </select>
  </div>
</div>
<div class="row">
  <div class="col-md-8 offset-md-2">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in filteredExpenses" :key="expense.id">
          <td>{{ expense.date }}</td>
          <td>{{ expense.description }}</td>
          <td>{{ getCategoryName(expense.category_id) }}</td>
          <td>{{ expense.amount }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total:</th>
          <th></th>
          <th></th>
          <th>{{ totalExpenses }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
</div>
</template>
<script>
import { db } from '@/firebase.js'

export default {
  data() {
    return {
      expenses: [],
      categories: [],
      selectedCategory: "",
    };
  },
  mounted() {
    this.fetchExpenses();
    this.fetchCategories();
  },
  methods: {
    fetchExpenses() {
      const userId = this.$store.state.user.uid;
      db.collection("users").doc(userId).collection("expenses").orderBy("date", "desc").get().then(querySnapshot => {
        let expenses = [];
        querySnapshot.forEach(doc => {
          expenses.push({ id: doc.id, ...doc.data() });
        });
        this.expenses = expenses;
      });
    },
    fetchCategories() {
      const userId = this.$store.state.user.uid;
      db.collection("users").doc(userId).collection("categories").orderBy("name").get().then(querySnapshot => {
        let categories = [];
        querySnapshot.forEach(doc => {
          categories.push({ id: doc.id, ...doc.data() });
        });
        this.categories = categories;
      });
    },
    getCategoryName(categoryId) {
      const category = this.categories.find(category => category.id === categoryId);
      return category ? category.name : "";
    }
  },
  computed: {
    filteredExpenses() {
      return this.selectedCategory
        ? this.expenses.filter(expense => expense.category_id === this.selectedCategory)
        : this.expenses;
    },
    totalExpenses() {
      return this.expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    }
  }
};
</script>