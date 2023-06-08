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
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': navbarOpen }" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="closeNavbar">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="!user" @click="closeNavbar">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register" v-if="!user" @click="closeNavbar">Sign-Up</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard" v-if="user" @click="closeNavbar">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/income" v-if="user" @click="closeNavbar">Income</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/expenses" v-if="user" @click="closeNavbar">Expenses</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/edittransactions" v-if="user" @click="closeNavbar">Edit Transactions</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/setbudget" v-if="user" @click="closeNavbar">Set Budget</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/viewbudget" v-if="user" @click="closeNavbar">View Budget</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" v-if="user" @click="closeNavbar">Profile</router-link>
            </li>
            <li class="nav-item">
              <button v-if="user" class="nav-link btn btn-link" @click="logout, closeNavbar">Logout</button>
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
      navbarOpen: false
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
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    closeNavbar() {
      this.navbarOpen = false;
    },
    logout() {
      auth
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error logging out:", error);
        });
    },
    onLoggedIn(user) {
      this.user = user;
    },
  },
};
</script>

<style scoped>

@media (max-width: 767px) {
  .navbar-nav {
    flex-direction: column;
    background-color: #333;
    padding: 1rem;
  }
  
  .nav-item {
    margin-bottom: 0.5rem;
  }
  
  .nav-link {
    color: #fff;
  }
}
</style>
<style src="./assets/globalStyles.css"></style>

