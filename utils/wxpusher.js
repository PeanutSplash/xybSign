const axios = require("axios");

const sendWxPusherMsg = async (msg, config) => {
  if (!config.wxPusherToken) {
    console.log("WxPusher token 未配置");
    return;
  }

  try {
    const response = await axios.get(`https://wxpusher.zjiecode.com/api/send/message/${config.wxPusherToken}/${encodeURIComponent(msg)}`);
    if (response.status === 200) {
      console.log("WxPusher消息发送成功");
    } else {
      console.log("WxPusher消息发送失败");
    }
  } catch (err) {
    console.log("WxPusher消息发送失败:", err.message);
  }
};

module.exports = { sendWxPusherMsg };