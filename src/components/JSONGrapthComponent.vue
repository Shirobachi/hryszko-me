<script setup>
  import axios from 'axios'
  import { onMounted } from 'vue'
  import { ref } from 'vue'
  import { Bar } from 'vue-chartjs'
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { computed } from 'vue'

  ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)

  // const gradient =

  const data = ref({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: (ctx) => {
          const canvas = ctx.chart.ctx
          const gradient = canvas.createLinearGradient(0, 0, 0, 400)
          gradient.addColorStop(0, 'rgba(58,123,213,1)')
          gradient.addColorStop(1, 'rgba(0,210,255,0.3)')
          return gradient
        },
        tension: 0.25,
      },
    ],
  })
  const options = { responsive: true }

  // const api = ref({
  //   url: 'https://wakatime.com/share/@b74ba3c5-2883-43ca-9833-799f8a50840a/067db09f-75f9-4677-8993-19882ce0af9c.json',
  //   response: null,
  // })

  // onMounted = () => {
  //   api.response = axios.get(api.url)
  // }

  // onMounted(async () => {
  // Get data from API
  //   try{
  //     const res = await axios.get(api.value.url);

  //     if(res.status === 200){
  //       api.value.response = res.data;
  //     }else{
  //       console.error(res);
  //     }

  //   }catch(e){
  //     console.error(e);
  //   }
  // })

  // const url =
  //   'https://wakatime.com/share/@b74ba3c5-2883-43ca-9833-799f8a50840a/067db09f-75f9-4677-8993-19882ce0af9c.json'
</script>

<template>
  <main>
    <Bar :data="data" :options="options" />
  </main>
</template>
