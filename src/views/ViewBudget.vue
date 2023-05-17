<template>
  <div class="container mx-auto">
    <div class="text-center font-semibold text-lg mb-4">
      View Budget
    </div>
    <div class="flex justify-center">
      <div class="w-full md:w-1/2 lg:w-1/3">
        <div class="bg-white shadow-md rounded-lg p-4">
          <div class="flex justify-between mb-2">
            <div class="font-semibold">Total Budget</div>
            <div class="font-semibold">{{ totalBudget }}</div>
          </div>
          <div class="flex justify-between mb-2">
            <div class="font-semibold">Remaining Budget</div>
            <div class="font-semibold">{{ remainingBudget }}</div>
          </div>
          <div class="flex justify-between mb-2">
            <div class="font-semibold">Spent</div>
            <div class="font-semibold">{{ spent }}</div>
          </div>
          <div class="flex justify-between mb-2">
            <div class="font-semibold">Expenses</div>
            <div class="font-semibold">{{ expenses }}</div>
          </div>
          <div class="flex justify-between mb-2">
            <div class="font-semibold">Income</div>
            <div class="font-semibold">{{ income }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth } from '@/firebase.js'

export default {
  data() {
    return {
      totalBudget: 0,
      remainingBudget: 0,
      spent: 0,
      expenses: 0,
      income: 0,
    };
  },
  created() {
    this.fetchBudgetData();
  },
  methods: {
    async fetchBudgetData() {
      const userId = auth.currentUser.uid;
      const budgetRef = firebase.firestore().collection('users').doc(userId).collection('budget').doc('budget');

      const totalBudgetDoc = await budgetRef.get();
      this.totalBudget = totalBudgetDoc.exists ? totalBudgetDoc.data().total_budget : 0;

      const expensesQuery = budgetRef.collection('expenses');
      const expensesDocs = await expensesQuery.get();
      this.expenses = expensesDocs.docs.reduce((total, doc) => total + doc.data().amount, 0);

      const incomeQuery = budgetRef.collection('income');
      const incomeDocs = await incomeQuery.get();
      this.income = incomeDocs.docs.reduce((total, doc) => total + doc.data().amount, 0);

      this.remainingBudget = this.totalBudget - this.expenses;
      this.spent = this.income - this.remainingBudget;
    },
  },
};
</script>

