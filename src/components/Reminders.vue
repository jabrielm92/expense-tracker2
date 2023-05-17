<template>
    <div class="reminders">
      <h1>Reminders</h1>
      <div class="add-reminder">
        <button @click="showAddReminderForm = true">Add Reminder</button>
      </div>
      <div v-if="showAddReminderForm">
        <h2>Add Reminder</h2>
        <form @submit.prevent="addReminder">
          <div>
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="newReminder.title" required>
          </div>
          <div>
            <label for="date">Date:</label>
            <input type="date" id="date" v-model="newReminder.date" required>
          </div>
          <div>
            <label for="time">Time:</label>
            <input type="time" id="time" v-model="newReminder.time" required>
          </div>
          <div>
            <button type="submit">Add Reminder</button>
            <button type="button" @click="showAddReminderForm = false">Cancel</button>
          </div>
        </form>
      </div>
      <div class="reminder-list">
        <h2>Current Reminders</h2>
        <ul>
          <li v-for="(reminder, index) in reminders" :key="index">
            <div class="reminder-info">
              <p><strong>Title:</strong> {{ reminder.title }}</p>
              <p><strong>Date:</strong> {{ reminder.date }}</p>
              <p><strong>Time:</strong> {{ reminder.time }}</p>
            </div>
            <div class="reminder-actions">
              <button @click="editReminder(index)">Edit</button>
              <button @click="deleteReminder(index)">Delete</button>
            </div>
          </li>
        </ul>
        <div v-if="reminders.length === 0">
          <p>No reminders found.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showAddReminderForm: false,
        newReminder: {
          title: '',
          date: '',
          time: '',
        },
        reminders: [
          {
            title: 'Doctor appointment',
            date: '2023-05-15',
            time: '10:00',
          },
          {
            title: 'Meeting with boss',
            date: '2023-05-16',
            time: '14:00',
          },
        ],
      };
    },
    methods: {
      addReminder() {
        this.reminders.push(this.newReminder);
        this.newReminder = {
          title: '',
          date: '',
          time: '',
        };
        this.showAddReminderForm = false;
      },
      editReminder(index) {
      },
      deleteReminder(index) {
        this.reminders.splice(index, 1);
      },
    },
  };
  </script>
  
  <style>
  .reminder-info {
    display: inline-block;
    margin-right: 20px;
  }
  .reminder-actions {
    display: inline-block;
  }
  </style>
  