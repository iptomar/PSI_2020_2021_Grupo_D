import { request } from "../configs/apiMiddleware";

//TODO: this
export default {
  getUncheckedStories: () => request("GET", "/api/map/stories-unchecked"),
  getStories: () => request("GET", "/api/map/stories"),
  createStory: (jsonData) => request("POST", "/api/map/story/create", { jsonData }),
  checkStory: (id) => request("PUT", `api/map/story-check/${id}`),
  deleteStory: (id) => request("PUT", `api/map/story/delete/${id}`),
};
