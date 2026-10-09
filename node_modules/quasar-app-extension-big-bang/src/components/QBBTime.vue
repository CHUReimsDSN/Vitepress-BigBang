<script setup lang="ts">
import { date } from "quasar";
import { computed } from "vue";

// props
const propsComponent = withDefaults(
  defineProps<{
    /**
     * Mask (formatting string) used for parsing and formatting value
     * 
     * @category model
     * @default "HH:mm"
     * @example 'HH:mm'
     * @example 'HHhmm'
     */
    mask?: string;

    /**
     * Time of the component
     * 
     * @category model
     * @default null
     * @example v-model="myDate"
     */
    'model-value': string | null;
  }>(),
  {
    mask: "HH:mm",
    "model-value": null
  },
);

// consts
const separator = ":"; // TODO
const dateSeparator = " "; // TODO
const bindButton = {
  class: "no-padding",
};

// refs
const model = defineModel<string>({ default: "" });

// functions
function setModel(hoursArg?: number, minutesArg?: number) {
  model.value = `${dateComp.value}${dateSeparator}${format(hoursArg ?? hours.value)}${separator}${format(minutesArg ?? minutes.value)}`;
}
function format(value: number) {
  if (Number.isNaN(value)) {
    value = 0;
  }
  return value.toString().padStart(2, "0");
}
function incrHour() {
  let currentValue = hours.value;
  if (isNaN(currentValue)) {
    currentValue = 0;
  }
  currentValue = (currentValue + 1) % 24;
  setModel(currentValue);
}
function decrHour() {
  let currentValue = hours.value;
  if (isNaN(currentValue)) {
    currentValue = 0;
  }
  currentValue = (currentValue + 23) % 24;
  setModel(currentValue);
}
function incrMinute() {
  let currentValue = minutes.value;
  if (isNaN(currentValue)) {
    currentValue = 0;
  }
  currentValue = (currentValue + 1) % 60;
  setModel(undefined, currentValue);
}
function decrMinute() {
  let currentValue = minutes.value;
  if (isNaN(currentValue)) {
    currentValue = 0;
  }
  currentValue = (currentValue + 59) % 60;
  setModel(undefined, currentValue);
}

// computeds
const hours = computed(() => {
  return parseInt(timeComp.value.split(separator).at(0) ?? "0");
});
const minutes = computed(() => {
  return parseInt(timeComp.value.split(separator).at(-1) ?? "0");
});
const dateComp = computed(() => {
  if (!propsComponent.mask.includes(dateSeparator)) {
    return ''
  }
  const value = model.value.split(dateSeparator).at(0);
  if (value === '') {
    return date.formatDate(new Date(), propsComponent.mask).split(dateSeparator).at(0);
  }
  return value;
});
const timeComp = computed(() => {
  return model.value.split(dateSeparator).at(-1) ?? '';
});
</script>

<template>
  <div class="flex row items-center no-wrap q-gutter-x-sm text-weight-bold">
    <div class="flex column flex-center">
      <q-btn icon="keyboard_arrow_up" v-bind="bindButton" @click="incrHour" />
      <div>{{ format(hours) }}</div>
      <q-btn icon="keyboard_arrow_down" v-bind="bindButton" @click="decrHour" />
    </div>
    <div>{{ separator }}</div>
    <div class="flex column flex-center">
      <q-btn icon="keyboard_arrow_up" v-bind="bindButton" @click="incrMinute" />
      <div>{{ format(minutes) }}</div>
      <q-btn icon="keyboard_arrow_down" v-bind="bindButton" @click="decrMinute" />
    </div>
  </div>
</template>
