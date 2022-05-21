<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const foo = ref(null)

onMounted(async () => {
  const { data } = await axios.get('/foo')

  foo.value = data
})

</script>

<template>
  <p>What an amazing day to mock my HTTP requests</p>
  <p data-testid="foo">{{ foo }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
