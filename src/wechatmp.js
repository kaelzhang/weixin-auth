import axios from 'axios'
import Base, {mock} from './base'

export default class WechatMP extends Base {
  _sessionUrl (code) {
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${this._appId}&secret=${this._secret}&js_code=${code}&grant_type=authorization_code`
  }

  _code2Session (code) {
    return axios.get(this._sessionUrl(code))
    .then(response => response.data)
  }

  auth (code) {
    return mock.mocked() || this._code2Session(code)
  }
}
