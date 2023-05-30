<template>
  <div class="login-container">
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" class="input-field">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" class="input-field">
      </div>
      <button type="submit" @click.prevent="loginUser" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
import { auth } from '@/firebase.js'
import router from '@/router'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser() {
      try {
        auth.signInWithEmailAndPassword(this.email, this.password)
        router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

form {
  width: 300px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.input-field {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.login-button:hover {
  background-color: #45a049;
}
</style>



