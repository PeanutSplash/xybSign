const axios = require("axios");

const sendWxPusherMsg = async (msg, account, username) => {
  if (!account.wxPusherToken) {
    console.log("WxPusher token 未配置");
    return;
  }

  try {
    const currentTime = new Date().toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
    });
    const signType = account.mode === "in" ? "签到" : "签退";
    const colorScheme =
      account.mode === "in"
        ? { gradient: "45deg, #4CAF50, #45a049", textColor: "#388E3C" }
        : { gradient: "45deg, #3F51B5, #3949AB", textColor: "#303F9F" };

    const content = `
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f7fa;
    }
    .container {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header,.footer,.note{
      opacity: 0 !important;
    }
    h1 {
      color: #ffffff;
      background: linear-gradient(${colorScheme.gradient});
      margin: 0;
      padding: 20px;
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
    }
    .info {
      background-color: #f8f9fa;
      padding: 20px;
      border-bottom: 1px solid #e9ecef;
    }
    .info p {
      margin: 10px 0;
      display: flex;
      align-items: center;
    }
    .info p strong {
      min-width: 80px;
      color: ${colorScheme.textColor};
    }
    .result {
      background-color: #ffffff;
      padding: 20px;
    }
    .result h3 {
      color: ${colorScheme.textColor};
      border-bottom: 2px solid ${colorScheme.textColor};
      padding-bottom: 10px;
      margin-top: 0;
      font-weight: 500;
    }
    .result p {
      margin: 10px 0;
      padding: 10px;
      background-color: #f1f8ff;
      border-left: 4px solid ${colorScheme.textColor};
      border-radius: 4px;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 0.9em;
      color: #7f8c8d;
      font-style: italic;
    }
    @media (max-width: 600px) {
      body {
        padding: 10px;
      }
      h1 {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>校友邦${signType}通知</h1>
    <div class="info">
      <p><strong>用户:</strong> ${username}</p>
      <p><strong>时间:</strong> ${currentTime}</p>
      <p><strong>模式:</strong> ${account.modeCN}</p>
    </div>
    <div class="result">
      <h3>执行结果:</h3>
      ${msg
        .split("\n")
        .slice(1)
        .map((line) => `<p>${line}</p>`)
        .join("")}
    </div>
  </div>
  <div class="footer">
    <p>此消息由自动化系统发送，请勿回复。</p>
  </div>
</body>
</html>
    `.trim();

    const url = "https://wxpusher.zjiecode.com/api/send/message/simple-push";

    const data = {
      content: content,
      summary: `校友邦${signType}通知`,
      contentType: 2,
      spt: account.wxPusherToken,
    };

    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.success) {
      console.log(`WxPusher消息发送成功 (${username})`);
    } else {
      console.log(`WxPusher消息发送失败 (${username}): ${response.data.msg}`);
    }
  } catch (err) {
    console.log(`WxPusher消息发送失败 (${username}):`, err.message);
    if (err.response) {
      console.log("错误状态码:", err.response.status);
      console.log("错误数据:", err.response.data);
    }
  }
};

module.exports = { sendWxPusherMsg };
