<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" class="responsive-chart" />
  </div>
</template>

<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import axios from 'axios'

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
        const { data } = await axios.get(this.api_url)
        
        for (const day of data.data) {
          this.chartData.labels.push(day.range.start.substring(0, 10))
          this.chartData.datasets[0].data.push(day.grand_total.total_seconds / 3600)
        }

        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    },
  }
</script>

<style scoped>
.responsive-chart {
  width: 70%;
}

@media screen and (max-width: 600px) {
  .responsive-chart {
    width: 100%;
  }
}

@media screen and (min-width: 601px) {
  .responsive-chart {
    width: 100%;
  }
}
</style>
