<script setup>
// write on composition API
import { ref, onMounted } from 'vue';

const name = ref("Muhammad Ali Mustaqim");
const status = ref(true);
// const tasks = ref(['Fix user account bug', 'Fix user profile edit', 'Add user transactions feature']);
const tasks = ref([]);
const link = ref('https://github.com/muhali16');
const newTask = ref('');

const changeUserStatus = () => {
  if (status.value === true) {
    status.value = false;
  } else {
    status.value = true;
  }
}

const addTask = () => {
  if (newTask.value !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((item) => item.title);
  } catch (err) {
    console.log("ErrorFetch:", err)
  }
})
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status">User is active</p>
  <p v-else>User is inactive</p>
  <br>
  <form @submit.prevent="addTask">
    <input type="text" name="newTask" placeholder="Add new task" v-model="newTask" />
    <button type="submit">Add</button>
  </form>
  <h3>Task:</h3>
  <ul>
    <span v-if="tasks.length > 0">
      <li v-for="task in tasks" :key="task">
      <span v-html="task"></span>
      |
      <button @click="deleteTask">x</button>
    </li>
    </span>
    <span v-else>No task added.</span>
  </ul>
  <br>
  <!--  <button v-on:click="changeUserStatus">Change Status</button>-->
  <button @click="changeUserStatus">Change Status</button>
  <br>
  <!--  <a v-bind:href="link">Go to User Account</a>-->
  <a :href="link">Go to User Account</a>
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
