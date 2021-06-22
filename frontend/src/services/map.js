import { request } from "../configs/apiMiddleware";

export default {
  getUncheckedStories: () => request("GET", "/api/map/stories-unchecked"),
  getStories: () => request("GET", "/api/map/stories"),
  createStory: (jsonData) => request("POST", "/api/map/story/create", { jsonData }),
  updateStoryImage: (id, formData) => request("PATCH", `/api/map/story/updateimg/${id}`, { formData }),
  checkStory: (id) => request("PUT", `/api/map/story-check/${id}`),
  deleteStory: (id) => request("DELETE", `/api/map/story-check/${id}`),
};
