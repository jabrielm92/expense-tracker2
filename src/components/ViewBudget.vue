<template>
  <div class="view-budget">
    <div v-if="showEditBudgetForm">
      <EditBudget
        :budget="budget"
        @cancel="cancelEditing"
      />
    </div>
    <div v-else>
      <div v-if="budget">
        <h2>Budget Details</h2>
        <table class="table">
          <tr>
            <th>Budget Amount</th>
            <td>{{ budget.amount }}</td>
          </tr>
          <tr>
            <th>Budget Period</th>
            <td>{{ budget.period }}</td>
          </tr>
          <tr>
            <th>Start Date</th>
            <td>{{ budget.startDate }}</td>
          </tr>
          <tr>
            <th>End Date</th>
            <td>{{ budget.endDate }}</td>
          </tr>
        </table>
        <p class="remaining-budget">
          Remaining Budget: {{ remainingBudget }}
        </p>
        <button @click="editBudget">Edit Budget</button>
      </div>
      <div v-else>
        <p class="no-budget">No budget set yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from '../firebase';
import EditBudget from './EditBudget.vue';

export default {
  components: {
    EditBudget,
  },
  data() {
    return {
      budget: null,
      transactions: [],
      showEditBudgetForm: false,
    };
  },
  created() {
    this.fetchBudget();
    this.fetchAllTransactions();
  },
  computed: {
    remainingBudget() {
      if (this.budget && this.transactions.length > 0) {
        const totalExpenses = this.transactions
          .filter((transaction) => transaction.type === 'expense')
          .reduce((total, transaction) => total + transaction.amount, 0);

        const totalIncome = this.transactions
          .filter((transaction) => transaction.type === 'income')
          .reduce((total, transaction) => total + transaction.amount, 0);

        return this.budget.amount + (totalIncome - totalExpenses) - totalIncome;
      } else {
        return 0;
      }
    },
  },
  methods: {
    async fetchBudget() {
      const userId = auth.currentUser.uid;
      try {
        const querySnapshot = await db
          .collection(`users/${userId}/budgets`)
          .orderBy('endDate', 'desc')
          .limit(1)
          .get();

        if (!querySnapshot.empty) {
          this.budget = querySnapshot.docs[0].data();
        }
      } catch (error) {
        console.error('Error fetching budget:', error);
      }
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
    editBudget() {
    this.showEditBudgetForm = true;
    },
    cancelEditing() {
      this.showEditBudgetForm = false;
    },
    async handleFormSubmit(updatedBudget) {
    const userId = auth.currentUser.uid;
    try {
      const budgetsCollection = db.collection(`users/${userId}/budgets`);
      const querySnapshot = await budgetsCollection
        .orderBy('endDate', 'desc')
        .limit(1)
        .get();

      if (!querySnapshot.empty) {
        const budgetId = querySnapshot.docs[0].id;
        const budgetRef = budgetsCollection.doc(budgetId);
        await budgetRef.update(updatedBudget);
        console.log('Budget updated');
      }

      // Set showEditBudgetForm to false after updating the budget
      this.showEditBudgetForm = false;

      // Fetch the updated budget and transactions
      await this.fetchBudget();
      await this.fetchAllTransactions();
    } catch (error) {
      console.error('Error updating budget:', error);
    }
  },
},
};
</script>

<style scoped>
.view-budget {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 1.5rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.table th {
  font-weight: bold;
}

.table td {
  vertical-align: middle;
}

.remaining-budget {
  margin-top: 1rem;
  font-weight: bold;
  color: #4CAF50;
}

.no-budget {
  font-style: italic;
  color: #888;
}
</style>

