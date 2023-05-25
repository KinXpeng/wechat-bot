import qrcode from 'qrcode-terminal'

// 扫码登录
export function scanLogin(c: any, status: number) {
  // status: 2代表链接等待调用，3代表链接已打开，这个链接实际上是提供一个登录的二维码供扫描
  if (status === 2) {
    status === 2 && qrcode.generate(c, { small: true }, console.log);
  }
}

// 登录后
export function loginInfo(user: any) {
  console.log(`用户 ${user} 登录成功`)
}
