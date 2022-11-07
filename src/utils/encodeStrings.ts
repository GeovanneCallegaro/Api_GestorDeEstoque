import CryptoJS from 'crypto-js'

const secretKey = process.env?.SECRET_KEY_ENCODE ? process.env?.SECRET_KEY_ENCODE : '';

export const ciphertext = CryptoJS.AES.encrypt("633e16dc1c4c74f8e20c9114", secretKey).toString();

export const decryptCode = (stringEncoded: string): string => {
  const bytes  = CryptoJS.AES.decrypt(stringEncoded, '1');
  return bytes.toString(CryptoJS.enc.Utf8);
}
