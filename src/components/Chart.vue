<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
    name: 'BarChart',
    components: { Bar },
    props: {
      api_url: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Coding time',
            data: [],
          },
        ],
      },
    }),
    async mounted () {
      this.loaded = false

      try {
        // Removed axios code for fetching data and updating chartData
        
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    },
  }
</script>
        
        <style scoped>
        </style>
