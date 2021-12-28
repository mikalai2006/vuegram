<script lang="ts" setup>
import { useStoryApi, useStoryBridge } from "@storyblok/nuxt/composables";
import { useStory } from "~/stores/useStory";
const storyapi = useStoryApi();

const storyPinia = useStory();

const route = useRoute();
let { slug } = route.params;
if (slug === "") slug = "home";

const { data } = await storyapi.get(`cdn/stories/${slug}`, {
  version: "draft",
  // starts_with: "/home",
  resolve_relations: "header,footer",
});
storyPinia.setPage(data);

onMounted(() => {
  useStoryBridge(story.value.id, (event) => {
    storyPinia.setStory(event);
  });
});

const story = computed(() => storyPinia.story);
</script>
<script lang="ts">
export default {
  layout: false,
};
</script>
<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        <TheHeader :uid="story.content.header" />
      </template>

      <component
        :is="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
      />
      <template #footer>Footer</template>
    </NuxtLayout>
  </div>
</template>
