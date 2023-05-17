<template>
  <div class="edit-income-container">
    <h1>Edit Income</h1>
    <form @submit.prevent="saveIncome">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="income.name" required>
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" v-model="income.amount" required>
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" v-model="income.date" required>
      </div>
      <div class="button-container">
        <button type="submit">Save</button>
        <button type="button" @click="cancelEdit">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditIncome",
  props: ["income"],
  methods: {
    saveIncome() {
      this.$emit("income-saved", this.income);
      this.income = {};
    },
    cancelEdit() {
      this.$emit("edit-canceled");
      this.income = {};
    },
  },
};
</script>

<style scoped>
.edit-income-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 18px;
  margin-right: 10px;
}

input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  margin-top: 20px;
  margin-right: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.button-container {
  display: flex;
  flex-direction: row;
}
</style>

  