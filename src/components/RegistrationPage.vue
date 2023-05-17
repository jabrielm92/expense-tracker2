<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
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
          // User registered successfully
          // Create a user document in Firestore under the user's ID
          const user = userCredential.user;
          db.collection('users').doc(user.uid).set({
            email: user.email
          })
          // Redirect to login page
          this.$router.push('/login')
        })
        .catch((error) => {
          // Handle errors here
          console.error(error.message)
        })
    }
  }
}
</script>

<style scoped>
.registration {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.registration h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.registration label {
  display: block;
  margin-bottom: 0.5rem;
}

.registration input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.registration button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
