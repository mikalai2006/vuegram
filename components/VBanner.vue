<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    v-editable="blok"
    class="relative bg-center text-gray-50"
    :style="[`background-image: url('${blok.image.filename}')`]"
  >
    <div class="absolute inset-0 bg-gray-800 opacity-80"></div>
    <div class="relative z-1 p-12">
      <h2 class="text-4xl">
        {{ blok.title }}
      </h2>
      <h3 class="text-md">
        {{ blok.description }}
      </h3>
    </div>
  </div>
</template>
