<script setup>
  import { PolarArea } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'
  // import axios from 'axios'
  // import { onMounted } from 'vue'
  // import { ref } from 'vue'
  // import { Bar } from 'vue-chartjs'
  // import { Line } from 'vue-chartjs'
  // import {
  //   Chart as ChartJS,
  //   PointElement,
  //   Title,
  //   Tooltip,
  //   Filler,
  //   Legend,
  //   LineElement,
  //   BarElement,
  //   CategoryScale,
  //   LinearScale,
  // } from 'chart.js'
  // import { computed } from 'vue'

  // ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, PointElement)
  // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)
  ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)
  const randomHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
  // const gradient =

  // const data = ref({
  //   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  //   datasets: [
  //     {
  //       data: [10, 20, 30, 40, 50, 60, 70],
  //       backgroundColor: (ctx) => {
  //         const canvas = ctx.chart.ctx
  //         const gradient = canvas.createLinearGradient(0, 0, 0, 400)
  //         gradient.addColorStop(0, 'rgba(58,123,213,1)')
  //         gradient.addColorStop(1, 'rgba(0,210,255,0.3)')
  //         return gradient
  //       },
  //       tension: 0.25,
  //     },
  //   ],
  // })
  // const options = { responsive: true }

  // LINE
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        fill: true,
        backgroundColor: [randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex()],
        pointBackgroundColor: 'white',
        data: [40, 39, 10, 40, 39, 80, 40],
      },
    ],
  }

  let delayed;
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      onComplete: () => {
        delayed = true
      },
      delay: context => {
        let delay = 0
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100
        }
        return delay
      },
    },
  }

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
    <!-- <Bar :data="data" :options="options" /> -->
    <!-- <Line style="height: 70vh" :data="data" :options="options" /> -->
    <PolarArea style="height: 70vh" :data="data" :options="options" />
  </main>
</template>
