<template>
  <div class="chart-container">
    <div ref="chart"></div>
    <div class="chart-legend">
      <div class="legend-item">
        <div class="legend-color legend-income"></div>
        <div class="legend-label">Total Income: ${{ totalIncome }}</div>
      </div>
      <div class="legend-item">
        <div class="legend-color legend-expense"></div>
        <div class="legend-label">Total Expense: ${{ totalExpense }}</div>
      </div>
      <div class="legend-item">
        <div class="legend-color legend-balance"></div>
        <div class="legend-label">Balance: ${{ balance }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from '@/firebase.js';
import Highcharts from 'highcharts';

export default {
  name: 'ChartComponent',
  data() {
    return {
      totalIncome: 0,
      totalExpense: 0,
      balance: 0,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const userId = auth.currentUser.uid;

      try {
        const incomeQuerySnapshot = await db.collection(`users/${userId}/income`).get();
        const expenseQuerySnapshot = await db.collection(`users/${userId}/expenses`).get();

        const incomeData = incomeQuerySnapshot.docs.map((doc) => doc.data());
        const expenseData = expenseQuerySnapshot.docs.map((doc) => doc.data());

        this.totalIncome = incomeData.reduce((sum, transaction) => sum + transaction.amount, 0);
        this.totalExpense = expenseData.reduce((sum, transaction) => sum + transaction.amount, 0);
        this.balance = this.totalIncome - this.totalExpense;

        this.renderChart();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    renderChart() {
      Highcharts.chart(this.$refs.chart, {
        chart: {
          type: 'pie',
        },
        title: {
          text: 'Income vs Expense',
        },
        tooltip: {
          pointFormat: '<b>{point.y}</b> ({point.percentage:.1f}%)',
        },
        series: [
          {
            name: 'Amount',
            data: [
              {
                name: 'Total Income',
                y: this.totalIncome,
                color: '#4CAF50',
              },
              {
                name: 'Total Expense',
                y: this.totalExpense,
                color: '#F44336',
              },
            ],
          },
        ],
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: ${point.y}',
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
  margin-top: 2rem;
}

.chart-legend {
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem;
  background-color: #F5F5F5;
}

.legend-item {
  display: flex;
  align-items: center;
}

.legend-color {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}

.legend-income {
  background-color: #4CAF50;
}

.legend-expense {
  background-color: #F44336;
}

.legend-balance {
  background-color: #2196F3;
}

.legend-label {
  font-size: 0.8rem;
}
</style>






  

  
  
