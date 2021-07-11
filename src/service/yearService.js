import http from "./http";

const endpoint = "/years";

const getYears = () => {
  return http.get(endpoint);
};

const saveYear = (yearData) => {
  if (!yearData._id) return http.post(endpoint, yearData);

  const yearDataWithoutId = { ...yearData };
  delete yearDataWithoutId._id;

  return http.put(`${endpoint}/${yearData._id}`, yearDataWithoutId);
};

export default {
  getYears,
  saveYear,
};
