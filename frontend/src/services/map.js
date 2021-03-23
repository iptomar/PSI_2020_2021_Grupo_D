import { request } from "../configs/apiMiddleware";

const getPoint = (id) => request("GET", `/api/mappoint/${id}`);
const getPoints = () => request("GET", "/api/mappoint");
const createPoint = (jsonData) =>
  request("POST", "/api/mappoint", { jsonData });


//TODO: this
export default {
  getPoint: getPoint,
  getPoints: getPoints,
  createPoint: createPoint,
};
