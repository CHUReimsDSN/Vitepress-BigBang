<script setup lang="ts">
import { QExpansionItem, QList } from "quasar";
import { computed } from "vue";
import SidebarItem from "./SidebarItem.vue";
import type { TSidebarEntry } from "../types";

// props
const propsComponent = defineProps<{
  items: TSidebarEntry[];
}>();

// functions
function isOpened(item: TSidebarEntry): boolean {
  return (item.items ?? []).find((i) => i.active || isOpened(i)) !== undefined;
}

// computeds
const menus = computed(() => {
  // wtf VitePress
  if (propsComponent.items[0].text === undefined) {
    return [
      ...(propsComponent.items[0].items ?? []),
      ...propsComponent.items.slice(1),
    ];
  }
  return propsComponent.items;
});
</script>

<template>
  <q-list>
    <div v-for="item of menus" :key="item.text">
      <q-expansion-item
        v-if="(item.items?.length ?? 0) > 0"
        :default-opened="isOpened(item)"
        :icon="item.icon ?? ''"
        :label="item.text ?? '???'"
        headerClass="menu-item"
        class="menu-expandable"
        group="groupAccordionMode"
      >
        <SidebarGroup :items="item.items!" />
      </q-expansion-item>

      <SidebarItem v-else :item="item" />
    </div>
  </q-list>
</template>
