// code
//
// scope
//   - snsapi_base
//   - snsapi_userinfo

const template = () => {
  return
}


// { "access_token":"ACCESS_TOKEN",
//  "expires_in":7200,
//  "refresh_token":"REFRESH_TOKEN",
//  "openid":"OPENID",
//  "scope":"SCOPE" }


import axios from 'axios'


export class Web {
  constructor ({
    appId,
    secret
  }) {

    this._appId = appId
    this._secret = secret
  }

  baseAuthUrl (redirect_uri, state = 'snsapi_base') {
    return this._getAuthUrl(redirect_uri, '', state)
  }

  userInfoAuthUrl (redirect_uri, state = '') {
    return this._getAuthUrl(redirect_uri, 'snsapi_userinfo', state)
  }

  _getAuthUrl (redirect_uri, scope, state) {
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this._appId}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
  }

  _getAccessTokenUrl (code) {
    return `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${this._appId}&secret=${this._secret}&code=${code}&grant_type=authorization_code`
  }

  accessToken (code) {
    return axios.get(this._getAccessTokenUrl(code))
    .then(response => response.data)
    .catch()
  }
}
