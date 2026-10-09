<script setup lang="ts">
import { QIcon, QItem, QItemSection } from "quasar";
import type { TSidebarEntry } from "../types";
import { ref, watch, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vitepress";

// props
const propsComponent = defineProps<{
  item: TSidebarEntry;
}>();

// consts
const router = useRouter();
const route = useRoute();

// refs
const isActive = ref(false);

// functions
function goTo() {
  if (propsComponent.item.link) {
    router.go(itemLink.value);
  }
}
function trackIsActive() {
  isActive.value = route.path.includes(itemLink.value);
}

// computeds
const itemLink = computed(() => {
  return "Submit64-vue" + propsComponent.item.link?.replaceAll(".md", "");
});

// watchs
watch(route, () => {
  trackIsActive();
});

// lifeCycle
onMounted(() => {
  trackIsActive();
});
</script>

<template>
  <q-item
    clickable
    activeClass="menu-item-active"
    :active="isActive"
    class="menu-item"
    @click="goTo"
  >
    <q-item-section v-if="item.icon" avatar>
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      {{ item.text ?? "???" }}
    </q-item-section>
  </q-item>
</template>
