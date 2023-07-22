<script setup>
  import anime from 'animejs'
  import { onMounted } from 'vue'

  const props = defineProps({
    side: {
      type: String,
      default: 'right',
    },
  })

  onMounted(() => {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 100,
      targets: 'img',
    })

    tl.add({
      scale: 0.8,
      delay: 1000,
    })
      .add({
        borderRadius: '50',
      })
      .add({
        rotate: 10,
        duration: 10,
      })
      .add({
        scale: 0.5,
      })
  })
</script>

<template>
  <main>
    <img
      src="https://wakatime.com/share/@b74ba3c5-2883-43ca-9833-799f8a50840a/a2c2de03-1b12-4561-bd48-bbec46a0980f.svg" />
  </main>
</template>
