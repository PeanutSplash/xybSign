const axios = require("axios");

const sendWxPusherMsg = async (msg, account, username) => {
  if (!account.wxPusherToken) {
    console.log("WxPusher token 未配置");
    return;
  }

  try {
    const message = `用户 ${username} 的执行结果:\n${msg}`;
    const response = await axios.get(
      `https://wxpusher.zjiecode.com/api/send/message/${
        account.wxPusherToken
      }/${encodeURIComponent(message)}`
    );
    if (response.status === 200) {
      console.log(`WxPusher消息发送成功 (${username})`);
    } else {
      console.log(`WxPusher消息发送失败 (${username})`);
    }
  } catch (err) {
    console.log(`WxPusher消息发送失败 (${username}):`, err.message);
  }
};

module.exports = { sendWxPusherMsg };
