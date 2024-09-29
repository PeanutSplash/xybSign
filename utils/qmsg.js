const axios = require("axios");

const sendMsg = async (msg, account, username) => {
  let data = { msg: `用户 ${username} 的执行结果:\n${msg}` };
  if (account.qmsgTo) {
    data.qq = account.qmsgTo;
  }
  try {
    const response = await axios.post(
      "https://qmsg.zendee.cn/send/" + account.qmsgKey,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(`qmsg消息发送成功 (${username})`);
  } catch (err) {
    console.log(`qmsg消息发送失败 (${username}):`, err.message);
  }
};

module.exports = { sendMsg };
