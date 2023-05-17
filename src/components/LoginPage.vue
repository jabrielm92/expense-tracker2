<template>
  <div>
    <h2>Login</h2>
    <form>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password">
      </div>
      <button type="submit" @click.prevent="loginUser()">Login</button>
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
        router.push('/income')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>


