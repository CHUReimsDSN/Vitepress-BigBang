<script setup lang="ts">
import { ref } from "vue";
import { primaries, type TPrimaryLabel } from "../core/primary";
import { surfaces, type TSurfaceLabel } from "../core/surface";
import { BigBangTheme } from "../core/big-bang-theme";

// refs
const selectedPrimary = ref(BigBangTheme.getPrimary());
const selectedSurface = ref(BigBangTheme.getSurface());

// functions
/**
 * Set Primary color
 * 
 * @param label The primary label
 */
function setPrimary(label: TPrimaryLabel) {
  BigBangTheme.setPrimary(label);
  selectedPrimary.value = label;
}

/**
 * Set Surface color
 * 
 * @param label The surface label
 */
function setSurface(label: TSurfaceLabel) {
  BigBangTheme.setSurface(label);
  selectedSurface.value = label;
}

// exposes
defineExpose({
  setPrimary,
  setSurface
})
</script>

<template>
  <div class="theme-preview-container">
    <div class="flex column">
      <div class="flex column q-gutter-y-sm">
        <div class="text-body1">Primary</div>
        <div class="flex row items-center">
          <div v-for="primary of primaries" :key="primary[0]"
            :class="`theme-selector ${selectedPrimary === primary[0] ? 'theme-selector-active' : ''}`" name="circle"
            :style="`background: ${primary[1].reference}`" @click="setPrimary(primary[0])">
            <q-tooltip>{{ primary[0] }}</q-tooltip>
          </div>
        </div>
      </div>
      <div class="flex column q-gutter-y-sm q-pt-md">
        <div class="text-body1">Surface</div>
        <div class="flex row items-center">
          <div v-for="surface of surfaces" :key="surface[0]"
            :class="`theme-selector ${selectedSurface === surface[0] ? 'theme-selector-active' : ''}`" name="circle"
            :style="`background: ${surface[1].reference}`" @click="setSurface(surface[0])">
            <q-tooltip>{{ surface[0] }}</q-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.theme-preview-container
  display: flex
  flex-direction: column
  width: 14vw
  padding: 4px

.theme-selector
  position: relative
  border-radius: 50%
  border: 2px solid var(--card-background)
  height: 20px
  width: 20px
  margin: 4px
  cursor: pointer
  &-active
    &:after
      content: ""
      position: absolute
      border-radius: 50%
      inset: -4px
      border: 2px solid var(--primary-color)
</style>
