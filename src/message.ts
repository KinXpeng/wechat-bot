import { sendMessage } from './chatgpt'
import config from '../config'

// 储存上次的ID
let prevID = ''

// 监听处理消息
export async function onMessage(msg: any) {
  const contact = msg.talker()
  const text = msg.text()
  const room = msg.room()
  if (room) { // 群消息
    const topic = await room.topic()
    const mention = await msg.mentionSelf() // 被艾特的时候

    // console.log(`RoomID: ${room.id} Room: ${topic}  ContactID: ${contact.id} Contact: ${contact.name()} Text: ${text}`)
    if (config.groupList.includes(topic) && !msg.self() && text.indexOf("@倾倾倾风") != -1) { // FunnyModelPee
      // console.log(`Room: ${topic}  ContactID: ${contact.id} Contact: ${contact.name()} Text: ${text}`)
      // console.log('mention', mention, text);
      const responseInfo: any = await sendMessage(text, prevID)
      const [responseText, parentMessageId] = responseInfo.split('\u0000')
      if (parentMessageId) prevID = parentMessageId
      msg.say(responseText)
    }
  } else { // 个人消息
    // console.log(`个人消息=>>>: ContactID: ${contact.id} Contact: ${contact.name()} Text: ${text}`);
    if (text && config.userList.includes(contact.name())) {
      // console.log(`个人消息=>>>: ContactID: ${contact.id} Contact: ${contact.name()} Text: ${text}`)
      const responseInfo: any = await sendMessage(text, prevID)
      const [responseText, parentMessageId] = responseInfo.split('\u0000')
      if (parentMessageId) prevID = parentMessageId
      msg.say(responseText)
    }
  }
}



