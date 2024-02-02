/* eslint-disable no-console */
import resolveProxy from '~/lib/resolveProxy'
const noProxy = process.env.noProxy
const token ='eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJDTzFQaXQ2REZrb2RSMkRNTG00M1ZyWWZyNTQ1cE85VUtxYzNWTjlVZzEwIn0.eyJleHAiOjE3MDY5MTcwNjcsImlhdCI6MTcwNjg4MTA2NywianRpIjoiNTgyYjI4N2YtZTYxOC00Yzk5LWE1M2QtZmQ4ZDA4NjNmNDk1IiwiaXNzIjoiaHR0cHM6Ly9zaWduaW4uc2FsYS50ZWNoL3JlYWxtcy9zYW5kYm94IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjI5ZDZlNjk1LThhNzgtNGMzNC05Mzg0LTk5MDljNTRmZmQ2NiIsInR5cCI6IkJlYXJlciIsImF6cCI6IlN0dWRlbnQgUG9ydGZvbGlvIiwic2Vzc2lvbl9zdGF0ZSI6IjM0YTJjODAwLTYzMGYtNGRlZC05YTVhLTU3ZmM3M2JiNjE2MCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ0ZWFjaGVyIiwic3R1ZGVudCIsImRlZmF1bHQtcm9sZXMtc2FuZGJveCIsIm9mZmxpbmVfYWNjZXNzIiwic3RhZmYiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjM0YTJjODAwLTYzMGYtNGRlZC05YTVhLTU3ZmM3M2JiNjE2MCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Im1lc3NpIGxlbyIsInByZWZlcnJlZF91c2VybmFtZSI6Im1lc3NpIiwiZ2l2ZW5fbmFtZSI6Im1lc3NpIiwiZmFtaWx5X25hbWUiOiJsZW8iLCJlbWFpbCI6Iml0Yy5pdGNAZ21haWwuY29tIn0.MTGEoZA7Iy_9v5B0VpOJbQAsq1EE1kMq-vQu5Hp3E0bMrEsnMYBTPoB-NjkB2n9-5ZNof3R9lybO5Tb_fDLWYwVgYF71a27SlpMZ-dvSxmOwq0RQnsg6JQHdOpefz60gvhYK85X4Gt3QDeEizlhE12UmHxJ-VhEiuSLMu9EDFnKqRBeR-6bjndmbIRdMQ4Snh8fY9ZgHsnc7XoUVdDpEmsyzig7dG0cYllxBCQo35mvxbeyaKa6ek3_8OUVxGJFGIYFKTsRaWL_UVAVjBfEr6ty1HmxmJjqE7bT_wwHgaSh1_DwAZO8lFn8FvMk3bQmCnUAaf-pPbN-Ugat8U6z_nA' 
export default function ({ $axios, $auth }) {
  $axios.onError((error) => {
    if (
      error.response &&
      error.response.status &&
      error.response.status === 500
    ) {
      Error(error)
    }

    // if (error.response && error.response.status && error.response.status === 401) {
    //   $auth.reset()
    // }
    return Promise.reject(error)
  })

  $axios.onRequest((config) => {
    if (noProxy) config.url = resolveProxy(config.url)

    config.headers.common.Authorization = `Bearer ${token}`
    // config.headers.common.accept = 'application/json'
    // config.headers.post['Content-Type'] = 'application/json'
    // config.headers.common['Access-Control-Allow-Origin'] = '*'
    // config.headers.common['Access-Control-Allow-Headers'] = '*'
    // config.headers.common['Access-Control-Allow-Methods'] = 'POST, GET'

    return config
  })
}
