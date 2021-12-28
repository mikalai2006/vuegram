import { defineStore } from "pinia";

export const useStory = defineStore({
  id: "story",

  state: () => ({
    _ctx: {
      story: {},
      rels: [],
    },
  }),

  getters: {
    story(state): any {
      return state._ctx.story;
    },
    header(state): any {
      return (
        state._ctx.rels.find((x) => x._uid === state._ctx.story.header) || {}
      );
    },
    footer(state): any {
      return (
        state._ctx.rels.find((x) => x._uid === state._ctx.story.footer) || {}
      );
    },
  },

  actions: {
    setPage(data: any) {
      this._ctx = data;
    },
    setStory(story: any) {
      this._ctx.story = story;
    },
  },
});
