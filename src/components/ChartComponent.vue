<template>
    <div id="pie-chart"></div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  import { db, auth } from '@/firebase.js';
  
  export default {
    name: 'ChartComponent',
    data() {
      return {
        incomeTotal: 0,
        expenseTotal: 0
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        const userId = auth.currentUser.uid;
        db.collection(`users/${userId}/income`).get()
          .then((querySnapshot) => {
            let total = 0;
            querySnapshot.forEach((doc) => {
              total += doc.data().amount;
            });
            this.incomeTotal = total;
            this.drawChart();
          })
          .catch((error) => {
            console.error('Error fetching income total:', error);
          });
          
        db.collection(`users/${userId}/expenses`).get()
          .then((querySnapshot) => {
            let total = 0;
            querySnapshot.forEach((doc) => {
              total += doc.data().amount;
            });
            this.expenseTotal = total;
            this.drawChart();
          })
          .catch((error) => {
            console.error('Error fetching expense total:', error);
          });
      },
      drawChart() {
        if (this.incomeTotal && this.expenseTotal) {
          const data = [
            { label: 'Income', value: this.incomeTotal },
            { label: 'Expenses', value: this.expenseTotal }
          ];
          
          const width = 300;
          const height = 300;
          const radius = Math.min(width, height) / 2;
  
          const svg = d3.select('#pie-chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);
  
          const color = d3.scaleOrdinal()
            .domain(data.map(d => d.label))
            .range(['#5CB85C', '#D9534F']);
  
          const pie = d3.pie()
            .sort(null)
            .value(d => d.value);
  
          const path = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);
  
          const label = d3.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);
  
          const arc = svg.selectAll('.arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc');
  
          arc.append('path')
            .attr('d', path)
            .attr('fill', d => color(d.data.label));
  
          arc.append('text')
            .attr('transform', d => `translate(${label.centroid(d)})`)
            .attr('dy', '0.35em')
            .text(d => d.data.label);
        }
      }
    }
  };
  </script>
  

  
  
