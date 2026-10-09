<script setup>
import DefaultTheme from 'vitepress/theme'
import AsideBefore from './AsideBefore.vue'

// consts
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-before>
      <AsideBefore />
    </template>
  </Layout>
</template>
