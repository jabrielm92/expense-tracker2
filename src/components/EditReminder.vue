<template>
    <div class="container">
      <h2>Edit Reminder</h2>
      <form>
        <div class="form-group">
          <label for="reminderName">Reminder Name</label>
          <input type="text" class="form-control" id="reminderName" v-model="reminder.name">
        </div>
        <div class="form-group">
          <label for="reminderDescription">Reminder Description</label>
          <textarea class="form-control" id="reminderDescription" rows="3" v-model="reminder.description"></textarea>
        </div>
        <div class="form-group">
          <label for="reminderDate">Reminder Date</label>
          <input type="date" class="form-control" id="reminderDate" v-model="reminder.date">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" v-on:click.prevent="saveReminder()">Save Reminder</button>
          <button type="button" class="btn btn-danger" v-on:click="deleteReminder()">Delete Reminder</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditReminder',
    data() {
      return {
        reminder: {
          name: '',
          description: '',
          date: ''
        }
      }
    },

    created() {
      const reminderId = this.$route.params.id;
      axios.get(`/api/reminders/${reminderId}`)
      .then(response => {
      this.reminder = response.data;
    })
    .catch(error => {
      console.log(error);
    });

    },
    methods: {

      saveReminder() {
  const reminderId = this.$route.params.id;
  axios.put(`/api/reminders/${reminderId}`, this.reminder)
    .then(response => {
      console.log('Reminder saved!');
      this.$router.push('/view-reminders');
    })
    .catch(error => {
      console.log(error);
    });
},

      deleteReminder() {
        const reminderId = this.$route.params.id;
  axios.delete(`/api/reminders/${reminderId}`)
    .then(response => {
      console.log('Reminder deleted!');
       // Redirect to ViewReminders.vue component
       this.$router.push('/view-reminders');
    })
    .catch(error => {
      console.log(error);
    });
}
    }
  }
  </script>  