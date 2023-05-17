<template>
    <div class="home-container">
      <h1>Welcome to Your Personal Finance App</h1>
      <p>Track your expenses and income easily with our modern and intuitive app.</p>
      <div class="button-container">
        <router-link to="/login" class="button">Log In</router-link>
        <router-link to="/register" class="button">Register</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .home-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222;
    color: white;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .button {
    background-color: #4caf50;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1.6rem;
    margin-right: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .button:hover {
    background-color: #3e8e41;
  }
</style>

  