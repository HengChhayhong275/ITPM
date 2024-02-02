import resolveProxy from '~/lib/resolveProxy'
const noProxy = process.env.noProxy
const token='eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJDTzFQaXQ2REZrb2RSMkRNTG00M1ZyWWZyNTQ1cE85VUtxYzNWTjlVZzEwIn0.eyJleHAiOjE3MDY4ODA5NTAsImlhdCI6MTcwNjg0NDk1MCwianRpIjoiODFjODQ2NjAtNTQ0Yy00Mzk1LWIzN2QtMTNjZjg3NDRkMzg5IiwiaXNzIjoiaHR0cHM6Ly9zaWduaW4uc2FsYS50ZWNoL3JlYWxtcy9zYW5kYm94IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjI5ZDZlNjk1LThhNzgtNGMzNC05Mzg0LTk5MDljNTRmZmQ2NiIsInR5cCI6IkJlYXJlciIsImF6cCI6IlN0dWRlbnQgUG9ydGZvbGlvIiwic2Vzc2lvbl9zdGF0ZSI6ImU2YWZkZTZiLWY0NTctNGE3Mi04MjgwLTAzYTVmODI3ZDU5NSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ0ZWFjaGVyIiwic3R1ZGVudCIsImRlZmF1bHQtcm9sZXMtc2FuZGJveCIsIm9mZmxpbmVfYWNjZXNzIiwic3RhZmYiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6ImU2YWZkZTZiLWY0NTctNGE3Mi04MjgwLTAzYTVmODI3ZDU5NSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6Im1lc3NpIGxlbyIsInByZWZlcnJlZF91c2VybmFtZSI6Im1lc3NpIiwiZ2l2ZW5fbmFtZSI6Im1lc3NpIiwiZmFtaWx5X25hbWUiOiJsZW8iLCJlbWFpbCI6Iml0Yy5pdGNAZ21haWwuY29tIn0.a0qCL6qOLoNu63B4V37knTOlO2xjUL4d-pKZaPrYN_Ggvo3dPfF609W8iT3QtEW6_HHQk2h32THdx5I3b7GooTwP4h6grVHDVN4NZjfLuyIZoizqsU2z6taBtuVKlLYYT87h3aBrKa4wgyqDPLzww6xi1M8wbBA1LE4DMTisgvXmnAvdwlxNCTsY0Z0Qi4yAtpEtrWlbk27YRMMee4NqjRHLO1qBkO9q7QszjGAfSONQwmYD4BAcxJndDvqrzMTlcg3EW29vZYYgDQAi_tWXhiql4yYQPP6FVKK6RalL046WiYKDbNoiaNZGTsy4ioUPpR0D1VzgjehtOyaElk3QFQ'


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

    config.headers.common.Authorization = `Bearer ${token}`;
    // config.headers.common.accept = 'application/json'
    // config.headers.post['Content-Type'] = 'application/json'
    // config.headers.common['Access-Control-Allow-Origin'] = '*'
    // config.headers.common['Access-Control-Allow-Headers'] = '*'
    // config.headers.common['Access-Control-Allow-Methods'] = 'POST, GET'

    return config
  })
}
