export default class Base {
  constructor ({
    appId,
    secret
  }) {

    this._appId = appId
    this._secret = secret
  }
}

const mocked = {}

export function mock (enabled) {
  if (!enabled) {
    mocked.enabled = false
    return
  }

  Object.assign(mocked, enabled)

  mocked.enabled = true
}

mock.mocked = () => {
  if (!mocked.enabled) {
    return false
  }

  const {
    openid,
    session_key,
    unionid
  } = mocked

  return {
    openid,
    session_key,
    unionid
  }
}
