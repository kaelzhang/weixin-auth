// code
//
// scope
//   - snsapi_base
//   - snsapi_userinfo

const template = () => {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
}


const access_token_url = () => {
  return `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${code}&grant_type=authorization_code`
}


// { "access_token":"ACCESS_TOKEN",    
//  "expires_in":7200,
//  "refresh_token":"REFRESH_TOKEN",
//  "openid":"OPENID",
//  "scope":"SCOPE" }
