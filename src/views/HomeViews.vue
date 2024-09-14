<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobList from "@/components/JobList.vue";
</script>

<template>
  <Hero title="From Zero to Hero" subtitle="How to become expert Vue JS Developer." />
  <HomeCards />
  <JobList limit="3" :hideButton="true" />
</template>