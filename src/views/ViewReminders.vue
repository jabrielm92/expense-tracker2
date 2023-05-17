<template>
  <div>
    <h1>View Reminders</h1>
    <table>
      <thead>
        <tr>
          <th>Reminder</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reminder, index) in reminders" :key="index">
          <td>{{ reminder.title }}</td>
          <td>{{ reminder.description }}</td>
          <td>{{ reminder.dueDate }}</td>
          <td>
            <router-link :to="{ name: 'edit-reminder', params: { id: reminder.id } }">Edit</router-link>
            <button @click="deleteReminder(index, reminder.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/add-reminder">Add Reminder</router-link>
  </div>
</template>
<script>
import { db } from '@/firebase.js';

export default {
  name: "ViewReminders",
  data() {
    return {
      reminders: [],
    };
  },
  async created() {
    try {
      const remindersCollection = await db.collection("reminders").get();
      this.reminders = remindersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async deleteReminder(index, id) {
      try {
        await db.collection("reminders").doc(id).delete();
        this.reminders.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>