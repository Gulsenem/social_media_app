<template>
  <div class="messages">
    <Header />

    <main>
      <div class="wrapper flex">
        <aside>
          <Abonnieren />
        </aside>
        <div id="message_container">
          <h1>Send a message, get a message</h1>
          <p>Direct Messages are private conversations between you and other people. Share Tweets!</p>
          <div> <button>Start a conversation</button></div>
          <NachrichtButton/>
        </div>

      </div>
    </main>


  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Abonnieren from '@/components/Abonnieren.vue'
import NachrichtButton from '@/components/NachrichtButton.vue'


export default {
  components: {
    Header,
    Abonnieren,
    NachrichtButton
  },
}
</script>

<style scoped>

  #message_container
  {
    margin-left: 100px;
    padding:50px;
    background-color: var(--secondary);
  }
  #message_container>div
  {
    text-align: center;
    margin-top: 50px;}

</style>

