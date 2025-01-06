const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;  
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();  
    let encryptStr = '';
    let keyIndex = 0;  
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        const messageIndex = alphabet.indexOf(message[i]);
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);
        const shiftedIndex = (messageIndex + keyIndexInAlphabet) % 26;
        encryptStr += alphabet[shiftedIndex];
        keyIndex += 1;
      } else {
        encryptStr += message[i];
      }
    }
    if (!this.isDirect) {
      encryptStr = encryptStr.split('').reverse().join('');  
    }
    return encryptStr;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    let decryptStr = '';
    let keyIndex = 0;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (alphabet.includes(encryptedMessage[i])) {
        const encryptedIndex = alphabet.indexOf(encryptedMessage[i]);
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);
        const shiftedIndex = (encryptedIndex - keyIndexInAlphabet + 26) % 26;
        decryptStr += alphabet[shiftedIndex];
        keyIndex++;
      } else {
        decryptStr += encryptedMessage[i];
      }
    }  
    if (!this.isDirect) {
      decryptStr = decryptStr.split('').reverse().join(''); 
    }
    return decryptStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
