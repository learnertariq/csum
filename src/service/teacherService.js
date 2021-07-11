import http from "./http";

const endpoint = "/teachers";

const getTeachers = (id) => {
  return http.get(endpoint);
};

const getTeacher = (id) => {
  return http.get(`${endpoint}/${id}`);
};

const saveTeacher = (teacher) => {
  if (!teacher._id) return http.post(endpoint, teacher);

  const teacherWithoutId = { ...teacher };
  delete teacherWithoutId._id;
  return http.put(`${endpoint}/${teacher._id}`, teacherWithoutId);
};

const deleteTeacher = (id) => {
  return http.delete(`${endpoint}/${id}`);
};

export default {
  saveTeacher,
  getTeachers,
  getTeacher,
  deleteTeacher,
};
