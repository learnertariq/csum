import http from "./http";

const apiendpoint = "/result";

const getUiData = () => {
  return http.get(apiendpoint);
};

export default {
  getUiData,
};
