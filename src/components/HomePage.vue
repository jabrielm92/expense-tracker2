<template>
  <div class="home-container">
    <div class="hero-container">
      <div class="hero-content">
        <h1>Welcome to Your Personal Finance App</h1>
        <p>Track your expenses and income with our modern and intuitive app.</p>
      </div>
    </div>

    <div class="feature-container">
      <div class="feature">
        <div class="icon-container">
          <i class="fas fa-chart-line"></i>
        </div>
        <h2>Budgeting</h2>
        <p>Effortlessly manage your finances by setting budgets and tracking your spending.</p>
      </div>

      <div class="feature">
        <div class="icon-container">
          <i class="fas fa-bell"></i>
        </div>
        <h2>Reminders</h2>
        <p>Never miss a bill payment or an important financial deadline with our reminder system.</p>
      </div>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #55c255;
  color: #333;
}

.hero-container {
  background-color: #222;
  padding: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  border-radius: 10px;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #4caf50;
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

.feature-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.feature {
  background-color: #222;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.icon-container {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.fa-chart-line {
  color: #4caf50;
}

.fa-bell {
  color: #2196f3;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #55c255;
}

.feature p {
  font-size: 1.2rem;
  color: #2196f3;
}
</style>



  