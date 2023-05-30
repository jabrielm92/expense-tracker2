<template>
    <div class="edit-transactions-container">
      <h1>Edit Transactions</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-if="transactions.length === 0">No transactions found.</div>
        <div v-else>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in transactions" :key="transaction.id">
                <td>{{ transaction.name }}</td>
                <td>{{ transaction.amount }}</td>
                <td>{{ transaction.date }}</td>
                <td>{{ transaction.category }}</td>
                <td>
                  <button @click="editTransaction(transaction)">Edit</button>
                  <button @click="removeTransaction(transaction)">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <div v-if="editingTransaction">
        <h2>Edit Transaction</h2>
        <form @submit.prevent="saveTransaction">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="editedTransaction.name" required>
          </div>
          <div>
            <label for="amount">Amount:</label>
            <input type="number" id="amount" v-model="editedTransaction.amount" required>
          </div>
          <div>
            <label for="date">Date:</label>
            <input type="date" id="date" v-model="editedTransaction.date" required>
          </div>
          <div>
            <label for="type">Type:</label>
            <select id="type" v-model="editedTransaction.type" required>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div>
            <button type="submit">Save</button>
            <button @click="cancelEdit">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { db, auth } from '@/firebase.js';
  
  export default {
    name: "EditTransactions",
    data() {
      return {
        transactions: [],
        loading: false,
        editingTransaction: null,
        editedTransaction: {
          id: '',
          name: '',
          amount: '',
          date: '',
          type: ''
        },
      };
    },
    created() {
      this.fetchAllTransactions();
    },
    methods: {
      fetchAllTransactions() {
        const userId = auth.currentUser.uid;
        this.loading = true;
  
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
          })
          .finally(() => {
            this.loading = false;
          });
      },
      editTransaction(transaction) {
        this.editingTransaction = transaction;
        this.editedTransaction = { ...transaction };
      },
      saveTransaction() {
        const userId = auth.currentUser.uid;
        const collectionRef =
          this.editedTransaction.type === 'income'
            ? `users/${userId}/income`
            : `users/${userId}/expenses`;
  
        db.collection(collectionRef)
          .doc(this.editedTransaction.id)
          .update(this.editedTransaction)
          .then(() => {
            const index = this.transactions.findIndex((t) => t.id === this.editedTransaction.id);
            if (index !== -1) {
              this.transactions[index] = this.editedTransaction;
            }
            this.cancelEdit();
          })
          .catch((error) => {
            console.error('Error updating transaction:', error);
          });
      },
      removeTransaction(transaction) {
        const userId = auth.currentUser.uid;
        const collectionRef =
          transaction.type === 'income' ? `users/${userId}/income` : `users/${userId}/expenses`;
  
        db.collection(collectionRef)
          .doc(transaction.id)
          .delete()
          .then(() => {
            const index = this.transactions.findIndex((t) => t.id === transaction.id);
            if (index !== -1) {
              this.transactions.splice(index, 1);
            }
          })
          .catch((error) => {
            console.error('Error removing transaction:', error);
          });
      },
      cancelEdit() {
        this.editingTransaction = null;
        this.editedTransaction = {
          id: '',
          name: '',
          amount: '',
          date: '',
          type: ''
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .edit-transactions-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  button {
    padding: 5px 10px;
    margin-right: 5px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  form {
    margin-top: 20px;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  label {
    display: inline-block;
    width: 100px;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="date"],
  select {
    width: 200px;
  }
  </style>
  
  
  