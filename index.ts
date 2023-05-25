import { WechatyBuilder } from 'wechaty'
import { scanLogin, loginInfo } from './src/login';
import { onMessage } from './src/message';

const wechaty = WechatyBuilder.build();

wechaty
  .on("scan", scanLogin)  // 扫码登录
  .on("login", loginInfo)
  .on("error", console.error)
  .on('friendship', friendship => console.log('收到好友请求：' + friendship))
  .on('room-invite', invitation => console.log('收到入群邀请：' + invitation))
  .on("message", onMessage); // 监听消息
wechaty.start()
