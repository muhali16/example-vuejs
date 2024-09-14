<script>
// write on options API
export default {
  data () {
    return {
      name: 'Muhammad Ali Mustaqim',
      status: false,
      tasks: ['Fix user account bug', 'Fix user profile edit', 'Add user transactions feature'],
      link: "https://github.com/muhali16"
    }
  },
  methods: {
    changeUserStatus () {
      if (this.status === true) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
  }
}
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status">User is active</p>
  <p v-else>User is inactive</p>
  <br>
  <h3>Task:</h3>
  <ol>
    <li v-for="task in tasks" :key="task">{{task}}</li>
  </ol>
  <br>
<!--  <button v-on:click="changeUserStatus">Change Status</button>-->
  <button @click="changeUserStatus">Change Status</button>
  <br>
<!--  <a v-bind:href="link">Go to User Account</a>-->
  <a :href="link" target="_blank">Go to User Account</a>
</template>

<!--<style scoped>-->
<!--header {-->
<!--  line-height: 1.5;-->
<!--}-->

<!--.logo {-->
<!--  display: block;-->
<!--  margin: 0 auto 2rem;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  header {-->
<!--    display: flex;-->
<!--    place-items: center;-->
<!--    padding-right: calc(var(&#45;&#45;section-gap) / 2);-->
<!--  }-->

<!--  .logo {-->
<!--    margin: 0 2rem 0 0;-->
<!--  }-->

<!--  header .wrapper {-->
<!--    display: flex;-->
<!--    place-items: flex-start;-->
<!--    flex-wrap: wrap;-->
<!--  }-->
<!--}-->
<!--</style>-->
