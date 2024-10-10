const md5 = require('blueimp-md5');
const { Buffer } = require('buffer');

const password = 'abc789456ABC';
console.log('Password:', password);

// 使用 UTF-8 编码
const utf8Password = Buffer.from(password, 'utf8');
console.log('MD5 (UTF-8):', md5(utf8Password));

// 如果需要使用其他编码，例如 UTF-16LE
const utf16lePassword = Buffer.from(password, 'utf16le');
console.log('MD5 (UTF-16LE):', md5(utf16lePassword));