
# xybSign

校友邦 多用户 自动签到(上传图片)、填写周报

## 功能特点

- 支持多用户配置
- 自动签到和签退
- 可选自定义位置
- 支持上传签到图片
- 自动填写周报(可选)
- 支持消息推送(qmsg酱和WxPusher)

## 使用方法

### 1. 配置

修改 `config.js` 文件:

- 在 `accounts` 数组中添加用户信息
- 设置 `signInTime` 和 `signOutTime` 定义签到和签退时间
- 可选: 配置 `qmsgKey`, `qmsgTo` 和 `wxPusherToken` 用于消息推送
- wxPusherToken使用的是极简推送,获取方式请参考 https://wxpusher.zjiecode.com/docs/#/?id=spt


配置示例:

```javascript
{
  username: "16602046914", //用户名
  password: "abc789456", //密码
  sign: true, //是否自动签到
  reSign: false, //是否重新签到
  location: "113.936557,22.540476999999974", //经纬度 (可选)
  wxPusherToken: "SPT_HZNxQAgxpU2oZxWveCWJOWOFOc62",//可选
}
```

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

## 注意事项

- 请确保提供的用户名和密码正确
- 如果使用自定义位置,请确保提供的经纬度准确
- 消息推送需要正确配置对应的key和token

## 免责声明

本项目仅供学习和参考使用,请勿用于任何商业用途。使用本项目造成的任何法律责任由使用者自行承担,与本项目无关。
