<script setup>
import jobsData from "@/jobs.json";
import JobCard from "@/components/JobCard.vue";
import {defineProps} from 'vue';

defineProps({
  limit: Number,
  hideButton: Boolean
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard v-for="job in jobsData.slice(0, limit || jobsData.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="hideButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >View All Jobs</RouterLink
    >
  </section>
</template>

<style scoped>

</style>