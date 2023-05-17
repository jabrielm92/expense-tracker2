<template>
  <div class="add-income">
    <h2>Add Income</h2>
    <form @submit.prevent="addIncome">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model="amount" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="description"></textarea>
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      amount: "",
      description: "",
    };
  },
  methods: {
    addIncome() {
      const db = firebase.firestore();
      const newIncome = {
        name: this.name,
        amount: parseFloat(this.amount),
        description: this.description,
        date: firebase.firestore.Timestamp.fromDate(new Date())
      };
      db.collection("incomes")
        .add(newIncome)
        .then(() => {
          this.$emit("added-income", newIncome);
          this.name = "";
          this.amount = "";
          this.description = "";
        });
    },
  },
};
</script>

<style>
.add-income {
  max-width: 400px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input,
textarea {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>

  