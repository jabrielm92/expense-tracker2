<template>
  <div class="container">
    <h1 class="mb-4">Budget</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Current Budget</h5>
            <p class="card-text">{{ budget }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Set Budget</h5>
            <form @submit.prevent="setBudget">
              <div class="form-group">
                <label for="budgetInput">Enter budget amount</label>
                <input type="number" class="form-control" id="budgetInput" v-model="newBudget">
              </div>
              <button type="submit" class="btn btn-primary">Set Budget</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Remaining Budget</h5>
            <p class="card-text">{{ remainingBudget }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      budget: 0,
      newBudget: 0
    }
  },
  computed: {
    remainingBudget() {
      return this.budget - this.$store.state.expenses.reduce((acc, expense) => acc + expense.amount, 0)
    }
  },
  created() {
    const userId = firebase.auth().currentUser.uid
    const budgetRef = firebase.firestore().collection('users').doc(userId).collection('budget').doc('currentBudget')
    budgetRef.get().then(doc => {
      if (doc.exists) {
        this.budget = doc.data().amount
      } else {
        console.log('No current budget document found')
      }
    }).catch(error => {
      console.error('Error fetching current budget:', error)
    })
  },
  methods: {
    setBudget() {
      const userId = firebase.auth().currentUser.uid
      const budgetRef = firebase.firestore().collection('users').doc(userId).collection('budget').doc('currentBudget')
      budgetRef.set({
        amount: this.newBudget
      }).then(() => {
        console.log('Budget set:', this.newBudget)
        this.budget = this.newBudget
        this.newBudget = 0
      }).catch(error => {
        console.error('Error setting budget:', error)
      })
    }
  }
}
</script>
  