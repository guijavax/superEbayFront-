import axios from 'axios'

export const SERVICES = {
  GET: (url, callBackSucces, callBackFail, body) => {
    if (body) {
      axios({method: 'GET', url: url, params: body}).then(res => {
        if (res.status === 200) {
          callBackSucces(res.data)
        } else {
          callBackFail(res)
        }
      })
    } else {
      axios({method: 'GET', url: url}).then(res => {
        if (res.status === 200) {
          callBackSucces(res.data)
        } else {
          callBackFail(res)
        }
      })
    }
  }
}
