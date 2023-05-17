<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Expense Tracker</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="!user">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register" v-if="!user">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard" v-if="user">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/income" v-if="user">Income</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/expenses" v-if="user">Expenses</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/budget" v-if="user">Budget</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/reminders" v-if="user">Reminders</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" v-if="user">Profile</router-link>
            </li>
            <li class="nav-item">
              <button v-if="user" class="nav-link btn btn-link" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container my-4">
      <router-view :user="user" @logged-in="onLoggedIn"></router-view>
    </div>
  </div>
</template>
<script>
import { auth } from "@/firebase.js";

export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout() {
  auth.signOut()
    .then(() => {
      this.user = null;
      this.$router.push('/');
    })
    .catch((error) => {
      console.error('Error logging out:', error);
    });
},
    onLoggedIn(user) {
      this.user = user;
    },
  },
};
</script>
<style>
  #app {
    font-family: "Open Sans", sans-serif;
  }

  .container {
    max-width: 800px;
  }

  .my-4 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>
