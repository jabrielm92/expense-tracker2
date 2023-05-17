<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header"> Total Income</div>
            <div class="card-body">
            <h5 class="card-title">${{incomeTotal}}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header"> Total Expenses</div>
            <div class="card-body">
            <h5 class="card-title">${{expenseTotal}}</h5>
          </div>
        </div>
      </div>
      <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="card-header"> Recent Transactions</div>
            <div class="card-body">
              <table class="table">
               <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
              </tr>
            </thead>
            <tbody> </tbody>
              <tr v-for="transaction in transactions" :key="transaction.id">
                  <td>{{transaction.name}}</td>
                  <td>{{transaction.amount}}</td>
                  <td>{{transaction.category}}</td>
                  <td>{{transaction.date}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="chart-container">
    <chart-component :title="'Transactions'"/>
</div>
</template>

<script>
import { db, auth } from '@/firebase.js';
import ChartComponent from "@/components/ChartComponent.vue";

export default {
  name: 'DashboardPage',
  components: {
    ChartComponent,
  },
  data() {
    return {
      incomeTotal: 0,
      expenseTotal: 0,
      transactions: []
    }
  },
  created() {
    this.fetchIncomeTotal();
    this.fetchExpenseTotal();
    this.fetchAllTransactions();
  },
  methods: {
    fetchIncomeTotal() {
      const userId = auth.currentUser.uid;
      db.collection(`users/${userId}/income`).get()
        .then((querySnapshot) => {
          let total = 0;
          querySnapshot.forEach((doc) => {
            total += doc.data().amount;
          });
          this.incomeTotal = total;
        })
        .catch((error) => {
          console.error('Error fetching income total:', error);
        });
    },
    fetchExpenseTotal() {
      const userId = auth.currentUser.uid;
      db.collection(`users/${userId}/expenses`).get()
        .then((querySnapshot) => {
          let total = 0;
          querySnapshot.forEach((doc) => {
            total += doc.data().amount;
          });
          this.expenseTotal = total;
        })
        .catch((error) => {
          console.error('Error fetching expense total:', error);
        });
    },
    fetchAllTransactions() {
      const userId = auth.currentUser.uid;
      db.collection(`users/${userId}/income`).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let transaction = doc.data();
            transaction.id = doc.id;
            transaction.type = 'income';
            this.transactions.push(transaction);
          });
        })
        .catch((error) => {
          console.error('Error fetching income transactions:', error);
        });
        
      db.collection(`users/${userId}/expenses`).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let transaction = doc.data();
            transaction.id = doc.id;
            transaction.type = 'expense';
            this.transactions.push(transaction);
          });
        })
        .catch((error) => {
          console.error('Error fetching expense transactions:', error);
        });
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
}

.card-header {
  background-color: #333;
  color: #fff;
}

.card-body {
  background-color: #f2f2f2;
}

.table {
  background-color: #fff;
}

.table td,
.table th {
  border: 1px solid #e6e6e6;
}

.table thead th {
  background-color: #333;
  color: #fff;
}

.card {
  background-color: #fff;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
}

.card-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0;
}

.row {
  margin: 0 -0.5rem;
}

.col-md-6 {
  padding: 0 0.5rem;
}

.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; 
}
</style>
