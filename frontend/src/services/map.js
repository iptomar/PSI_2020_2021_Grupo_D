import { request } from "../configs/apiMiddleware";

//TODO: this
export default {
  getPoint: (id) => request("GET", `/api/map/point/${id}`),
  getPoints: () => request("GET", "/api/map/points"),
  createPoint: (jsonData) => request("POST", "/api/mappoint", { jsonData }),
};
