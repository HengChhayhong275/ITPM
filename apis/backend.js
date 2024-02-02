/* eslint-disable no-console */
const API_BACKEND = process.env.API_BACKEND

export default {
  async getStudent(axios, schoolId, studentId) {
    return await axios.get(
      `/api-backend/schools/${schoolId}/students/${studentId}`
    )
  },
  async getAttendances(axios, page, pageSize) {
    const res = await axios.get(
      `http://localhost:3001/attendances?page=${page}&pageSize=${pageSize}`
    )
    return res.data
  },
  async getAttendancesById(axios, id) {
    const res = await axios.get(
      `http://localhost:3001/attendance-details/${id}`
    )
    return await res.data
  },
  async getAttendanceSumumary(axios) {
    return await axios.get(`${API_BACKEND}/attedance`)
  },
}
