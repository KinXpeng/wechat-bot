import request from 'request'

// 连接gpt发送消息
export async function sendMessage(text: string, id?: string) {
  return new Promise(async (resolve) => {
    request({
      url: 'https://openai.ppjun.cn/chat',
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: {
        parentMessageId: id || '',
        text: text
      }
    },
      function (error, response, body) {
        if (!error) {
          resolve(body)
        }
      })
  })
}
