<template>
    <div class="edit-budget">
      <h2>Edit Budget</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="budgetAmount">Budget Amount:</label>
          <input type="number" id="budgetAmount" v-model="budgetAmount" required>
        </div>
        <div class="form-group">
          <label for="budgetPeriod">Budget Period:</label>
          <select id="budgetPeriod" v-model="budgetPeriod" required>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div class="form-group">
          <label for="startDate">Start Date:</label>
          <input type="date" id="startDate" v-model="startDate" required>
        </div>
        <div class="form-group">
          <label for="endDate">End Date:</label>
          <input type="date" id="endDate" v-model="endDate" required>
        </div>
        <button type="submit">Update Budget</button>
      </form>
    </div>
  </template>
  
  <script>
  import { db, auth } from '../firebase';
  
  export default {
    name: 'EditBudget',
    data() {
      return {
        budgetAmount: 0,
        budgetPeriod: 'week',
        startDate: '',
        endDate: '',
      };
    },
    mounted() {
      this.fetchMostRecentBudget();
    },
    methods: {
      async fetchMostRecentBudget() {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          try {
            const budgetsCollection = db.collection(`users/${userId}/budgets`);
            const querySnapshot = await budgetsCollection.orderBy('endDate', 'desc').limit(1).get();
    
            if (!querySnapshot.empty) {
              const budget = querySnapshot.docs[0].data();
              this.budgetAmount = budget.amount;
              this.budgetPeriod = budget.period;
              this.startDate = budget.startDate;
              this.endDate = budget.endDate;
            }
          } catch (error) {
            console.error('Error fetching most recent budget:', error);
          }
        } else {
          console.log('User not authenticated');
        }
      },
      async submitForm() {
      const user = auth.currentUser;
      if (user) {
        const updatedBudget = {
          amount: this.budgetAmount,
          period: this.budgetPeriod,
          startDate: this.startDate,
          endDate: this.endDate,
        };

        try {
          const userId = user.uid;
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

          this.$emit('submit', updatedBudget);
        } catch (error) {
          console.error('Error updating budget:', error);
        }
      } else {
        console.log('User not authenticated');
      }
    },
  },
};
</script>
  
  <style scoped>
  .edit-budget {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input[type="number"],
  select,
  input[type="date"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
  }
  
  button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
  </style>
  
  
  
  
  
  
  