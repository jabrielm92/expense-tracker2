<template>
    <div class="container">
      <h1>Profile</h1>
      <div v-if="user">
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Name:</strong> {{ name }}</p>
        <div v-if="editing">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </div>
          <button type="button" class="btn btn-primary" @click="updateName()">Save</button>
        </div>
        <div v-else>
          <button type="button" class="btn btn-primary" @click="editing = true">Edit</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { db, auth } from '@/firebase.js'
  
  export default {
    name: 'ProfilePage',
    data() {
      return {
        user: null,
        name: '',
        editing: false
      }
    },
    created() {
      auth.onAuthStateChanged(user => {
        if (user) {
          this.user = user
          this.fetchName(user.uid)
        } else {
          this.user = null
        }
      })
    },
    methods: {
      fetchName(uid) {
        db.collection('users').doc(uid).get()
          .then(doc => {
            if (doc.exists) {
              const data = doc.data()
              this.name = data.name
            } else {
              console.log('No such document!')
            }
          })
          .catch(error => {
            console.log('Error getting document:', error)
          })
      },
      updateName() {
        db.collection('users').doc(this.user.uid).update({ name: this.name })
          .then(() => {
            console.log('Document successfully updated!')
            this.editing = false
          })
          .catch(error => {
            console.log('Error updating document:', error)
          })
      }
    }
  }
  </script>
  