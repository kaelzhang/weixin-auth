import test from 'ava'
import {mock, WechatMP} from '../src'

test('mock', t => {
  const weapp = new WechatMP({
    appId: 'a',
    secret: 'b'
  })

  const mocked = {
    unionid: 'a',
    session_key: 'b',
    openid: 'c'
  }

  mock(mocked)

  t.deepEqual(weapp.auth('code'), mocked)
})
