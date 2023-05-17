<template>
  <div>
    <h2>Add Reminder</h2>
    <form @submit.prevent="addReminder">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="reminder.title" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" v-model="reminder.description"></textarea>
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date" v-model="reminder.date" required>
      </div>
      <div class="form-group">
        <label for="time">Time</label>
        <input type="time" class="form-control" id="time" v-model="reminder.time" required>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/database';

export default {
  data() {
    return {
      reminder: {
        title: '',
        description: '',
        date: '',
        time: '',
      },
    };
  },
  methods: {
    addReminder() {
      if (!this.reminder.title || !this.reminder.date || !this.reminder.time) {
        alert('Please fill in all required fields');
        return;
      }


      const remindersRef = firebase.database().ref('reminders');
      const newReminderRef = remindersRef.push();
      newReminderRef.set(this.reminder);

      this.reminder.title = '';
      this.reminder.description = '';
      this.reminder.date = '';
      this.reminder.time = '';
    },
  },
};
</script>
<style scoped>
.form-group {
  margin-bottom: 1rem;
}
label {
  font-weight: bold;
}
</style>