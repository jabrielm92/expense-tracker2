<template>
  <div class="registration-container">
    <h2>Sign-Up</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" required class="input-field">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required class="input-field">
      </div>
      <button type="submit" class="register-button">Sign-Up</button>
    </form>
  </div>
</template>

<script>
import { auth, db } from '@/firebase.js';

export default {
  name: 'RegistrationPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          db.collection('users').doc(user.uid).set({
            email: user.email
          })
          this.$router.push('/login')
        })
        .catch((error) => {
          console.error(error.message)
        })
    }
  }
}
</script>

<style scoped>
.registration-container {
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
  border-radius: 5px;
}

.register-button {
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.register-button:hover {
  background-color: #0056b3;
}
</style>


