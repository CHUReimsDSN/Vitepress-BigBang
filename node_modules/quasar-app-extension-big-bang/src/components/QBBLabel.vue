<script setup lang="ts">
// props
const propsComponents = defineProps<{
  /**
   * Name of the label
   *
   * @category content
   * @example 'Name'
   */
  name: string;
}>()
</script>

<template>
  <div style="font-weight: 500; padding: 4px 0;">
    <slot>{{ propsComponents.name }}</slot>
  </div>
</template>
