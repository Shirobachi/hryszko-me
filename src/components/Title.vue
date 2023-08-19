<script setup>
  import anime from 'animejs'
  import { onMounted, defineProps } from 'vue'

  const props = defineProps({ path: String })

  function randomHex () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  onMounted(() => {
    anime({
      targets: 'path',
      keyframes: [
        { strokeDashoffset: [anime.setDashoffset, 0] },
        { fill: randomHex() },
        { strokeDashoffset: [0, anime.setDashoffset] },
        { fill: randomHex() },
      ],

      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
      },
      fill: {
        value: randomHex(),
        easing: 'easeInOutQuad',
      },

      duration: anime.random(1, 3) * Math.pow(10, 3),
      delay: anime.random(0, 0),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    })
  })
</script>

<template>
  <main>
    <div class="flex items-center justify-center">
      <p class="object-center text-8xl text-center m-10">
        <svg width="720.5" height="85" viewBox="0 0 720.5 85" xmlns="http://www.w3.org/2000/svg">
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#000"
            stroke-width="0.25mm"
            fill="none"
            class="stroke-text logo"
            style="stroke-width: 0.25mm; fill: none">
            <path :d="props.path" vector-effect="non-scaling-stroke" />
          </g>
        </svg>
      </p>
    </div>
  </main>
</template>
