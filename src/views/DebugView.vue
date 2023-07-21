<script setup>
  import GraphImageComponent from '../components/GraprhImageComponent.vue'
  import axios from 'axios'

  const type = 'GET';
  const url = 'https://wakatime.com/share/@b74ba3c5-2883-43ca-9833-799f8a50840a/9724ef06-7081-4a0b-905a-c5f6e986e756.json';

  const data = axios.get(url);
</script>

<template>
  <main>
    <!-- <GraphImageComponent /> -->
    <!-- <GraphImageComponent side="left" /> -->
  </main>
</template>
