<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header"> Total Income</div>
          <div class="card-body">
            <h5 class="card-title">${{ incomeTotal }}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-header"> Total Expenses</div>
          <div class="card-body">
            <h5 class="card-title">${{ expenseTotal }}</h5>
          </div>
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
              <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id">
                  <td>{{ transaction.name }}</td>
                  <td>{{ transaction.amount }}</td>
                  <td>{{ transaction.category }}</td>
                  <td>{{ transaction.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ChartComponent />
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
      transactions: [],
    };
  },
  created() {
    this.fetchIncomeTotal();
    this.fetchExpenseTotal();
    this.fetchAllTransactions();
  },
  methods: {
    fetchIncomeTotal() {
      const userId = auth.currentUser.uid;
      db.collection(`users/${userId}/income`)
        .get()
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
      db.collection(`users/${userId}/expenses`)
        .get()
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
      db.collection(`users/${userId}/income`)
        .get()
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

      db.collection(`users/${userId}/expenses`)
        .get()
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
    },
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
  justify-content: center;
  background-color: #55c255;
  color: #333;
}

.card-header {
  background-color: #222;
  color: #fff;
  padding: 1rem;
  border-radius: 8px 8px 0 0;
}

.card-body {
  background-color: #f2f2f2;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.table {
  background-color: #fff;
  border-collapse: collapse;
  width: 100%;
  font-size: 1rem; /* Adjust the font size for better mobile readability */
}

.table td,
.table th {
  border: 1px solid #e6e6e6;
  padding: 0.5rem;
  text-align: center; /* Center the content horizontally */
}

.table tbody tr {
  vertical-align: middle; /* Align the rows vertically */
}

.card {
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 2rem;
}

.card-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.row {
  margin: 0 -0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
}

.col-md-6 {
  padding: 0.5rem;
  flex: 0 0 100%;
  max-width: 100%;
}

@media (min-width: 768px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 992px) {
  .col-md-6 {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}

@media (min-width: 1200px) {
  .col-md-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
</style>
