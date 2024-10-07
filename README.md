# xybSign

校友邦 多用户 自动签到(上传图片)、填写周报

## 功能特点

- 支持多用户配置
- 自动签到和签退
- 可选自定义位置
- 支持上传签到图片
- 自动填写周报(可选)
- 支持消息推送(qmsg 酱和 WxPusher)

## 使用方法

### 1. 配置

修改 `config.js` 文件:

- 在 `accounts` 数组中添加用户信息
- 设置 `signInTime` 和 `signOutTime` 定义签到和签退时间
- 可选: 配置 `qmsgKey`, `qmsgTo` 和 `wxPusherToken` 用于消息推送
- wxPusherToken 使用的是极简推送,获取方式请参考 https://wxpusher.zjiecode.com/docs/#/?id=spt

配置示例:

```javascript
{
  username: "16698730875", //用户名
  password: "asdasduyg", //密码
  sign: true, //是否自动签到
  reSign: false, //是否重新签到
  location: "102.936557,21.547699", //经纬度 (可选)
  wxPusherToken: "SPT_HZNxQAgxpU2oZxWveCWJOWOFOc62",//可选
}
```

wxPusher 推送示例：

<img src="https://github.com/user-attachments/assets/5d4b776c-b789-44d5-83a7-5d08c126bd49" alt="wxPusher推送示例" width="300" />

### 2. 安装依赖

在项目目录下运行:

```
npm install
```

### 3. 运行

执行签到（单次）:

```
node index.js in
```

执行签退（单次）:

```
node index.js out
```

自动签到签退（每天执行）:

```
node index.js
```

### 4. 使用 GitHub Actions 自动执行

本项目支持使用 GitHub Actions 自动执行签到和签退操作。按照以下步骤设置：

1. 在 GitHub 仓库中，转到"Settings" > "Secrets and variables" > "Actions"。

2. 点击"New Environment secrets"，创建一个名为`XYB_CONFIG`的新密钥。

3. 在`XYB_CONFIG`的值中，粘贴您的`config.js`文件的内容（不包括`module.exports =`部分）。

4. GitHub Actions 将根据`.github/workflows/main.yml`文件中定义的计划自动运行签到和签退脚本。默认设置为：

   - 每天 UTC 时间 1:00（北京时间 9:00）执行签到
   - 每天 UTC 时间 10:00（北京时间 18:00）执行签退

5. 您也可以在 GitHub 仓库的"Actions"标签页中手动触发工作流程。

注意：请确保您的配置信息安全，不要直接将敏感信息提交到公开仓库中。

## 注意事项

- 请确保提供的用户名和密码正确
- 如果使用自定义位置,请确保提供的经纬度准确
- 消息推送需要正确配置对应的 key 和 token

## 免责声明

本项目仅供学习和参考使用,请勿用于任何商业用途。使用本项目造成的任何法律责任由使用者自行承担,与本项目无关。
