import { request } from "../configs/apiMiddleware";

export default {
  login: (jsonData) => request('POST', "/api/user/login", { jsonData }),
}