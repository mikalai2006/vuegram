<script lang="ts" setup>
import { useStory } from "~/stores/useStory";

const props = defineProps({
  uid: {
    type: String,
    required: true,
  },
});

const storyPinia = useStory();
const content = computed(() => storyPinia.header.content || {});
</script>

<template>
  <div class="bg-gray-900 text-gray-50 p-4">
    <component
      :is="blok.component"
      v-for="blok in content.links"
      :key="blok._id"
      :blok="blok"
    />
  </div>
</template>
