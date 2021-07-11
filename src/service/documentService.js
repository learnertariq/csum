import http from "./http";

const apiendpoint = "/documents";

const getDocuments = () => {
  return http.get(apiendpoint);
};

const saveDocument = (data) => {
  return http.post(apiendpoint, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default {
  getDocuments,
  saveDocument,
};
