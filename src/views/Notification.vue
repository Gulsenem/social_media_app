<template>
  <div class="notifications">
      <Header />

      <main>
        <div class="wrapper flex">
          <h4>Notifications</h4>
          <Trends />
          <NachrichtButton/>
        </div>
      </main>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Trends from '@/components/Trends.vue'
import NachrichtButton from '@/components/NachrichtButton.vue'

export default {
  components: {
    Header,
    Trends,
    NachrichtButton
  },
  
}
</script>
