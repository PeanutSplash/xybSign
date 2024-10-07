# xybSign

校友邦多用户自动签到系统 - 支持图片上传和周报填写

## 主要功能 🌟

- 🧑‍🤝‍🧑 多用户配置支持
- 🕰️ 自动签到和签退
- 📍 自定义位置选项
- 📸 签到图片上传
- 📝 自动周报填写(可选)
- 📢 消息推送集成(支持 qmsg 酱和 WxPusher)

## 使用指南 📖

### 1. 配置设置 ⚙️

编辑 `config.js` 文件:

- 在 `accounts` 数组中添加用户信息
- 设置 `signInTime` 和 `signOutTime` 来定义签到签退时间
- 可选: 配置 `qmsgKey`, `qmsgTo` 和 `wxPusherToken` 以启用消息推送
- WxPusher Token 获取方式请参考 [极简推送文档](https://wxpusher.zjiecode.com/docs/#/?id=spt)

配置示例:

```javascript
{
  username: "16698730875", // 用户名
  password: "asdasduyg",   // 密码
  sign: true,              // 是否自动签到
  reSign: false,           // 是否重新签到
  location: "102.936557,21.547699", // 经纬度 (可选)
  wxPusherToken: "SPT_HZNxQAgxpU2oZxWveCWJOWOFOc62", // 可选
}
```

WxPusher 推送效果:

<img src="https://github.com/user-attachments/assets/5d4b776c-b789-44d5-83a7-5d08c126bd49" alt="WxPusher推送示例" width="300" />

### 2. 安装依赖 📦

在项目根目录执行:

```bash
npm install
```

### 3. 运行程序 🚀

执行单次签到:

```bash
node index.js in
```

执行单次签退:

```bash
node index.js out
```

启动自动签到签退(每日执行):

```bash
node index.js
```

长期运行推荐使用 pm2:

```bash
# 安装 pm2
npm install -g pm2

# 启动应用
pm2 start index.js --name "xybSign"

# 查看运行状态
pm2 list

# 查看日志
pm2 logs xybSign
```

### 4. 利用 GitHub Actions 自动执行 🤖

本项目支持通过 GitHub Actions 自动执行签到签退。设置步骤如下:

1. 在 GitHub 仓库中,进入 "Settings" > "Secrets and variables" > "Actions"。

2. 点击 "New Environment secrets",创建名为 `XYB_CONFIG` 的新密钥。

3. 在 `XYB_CONFIG` 值中粘贴 `config.js` 文件内容(不包含 `module.exports =` 部分)。

4. GitHub Actions 将根据 `.github/workflows/main.yml` 文件中的计划自动运行脚本:

   - 每天 UTC 1:00 (北京时间 9:00) 执行签到
   - 每天 UTC 10:00 (北京时间 18:00) 执行签退

5. 您也可以在 GitHub 仓库的 "Actions" 标签页中手动触发工作流程。

注意: 请确保妥善保管配置信息,切勿将敏感信息直接提交到公开仓库。

## 注意事项 ⚠️

- 请确保提供的用户名和密码正确无误
- 使用自定义位置时,请确保提供的经纬度准确
- 消息推送功能需要正确配置相应的 key 和 token

## 免责声明 📜

本项目仅供学习和参考使用,禁止用于任何商业目的。使用本项目造成的任何法律责任均由使用者自行承担,与本项目开发者无关。
