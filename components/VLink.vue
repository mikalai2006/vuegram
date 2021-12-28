<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a :href="blok.link.url">
    {{ blok.link.cached_url }}
  </a>
</template>
