<template>
  <div class="h-full typewriter-effect sm:text-xl md:text-6xl lg:text-7xl">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Typewriter',
}
</script>

<script setup>
</script>

<style scoped>
.typewriter-effect {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #ee99a0; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
      typing 3.2s steps(60, end),
      blink-caret .85s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #ee99a0; }
}
</style>
