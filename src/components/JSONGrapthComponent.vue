<script setup>
  // import { PolarArea } from 'vue-chartjs'
  // import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'
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

  import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
  import { Radar } from 'vue-chartjs'

  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)
  ChartJS.defaults.color = '#fff'

  // ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, PointElement)
  // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)
  // ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)
  const randomHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
  const randomRbga = alpha => {
    return (
      'rgba(' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      alpha +
      ')'
    )
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
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "YAML", "JSON", "JavaScript", "Markdown", "Other", "Python", "Vue.js"],
    datasets: [
      {
        label: 'Data One',
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',

        data: [40, 39, 100, 40, 39, 80, 40],
      },
      {
    label: 'My Second Dataset',
    data: [0,0,0,0,0,0,0,28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }
    ],
  }

  let delayed
  const options = {
    tension: 11,
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
    <!-- <PolarArea style="height: 70vh" :data="data" :options="options" /> -->
    <Radar style="height: 70vh" :data="data" :options="options" />
  </main>
</template>
