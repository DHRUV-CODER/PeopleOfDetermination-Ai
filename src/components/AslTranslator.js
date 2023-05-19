export function textToASL(text) {
    const aslDict = {
      A: '👍',
      B: '👊',
      C: '✌️',
      D: '👆',
      E: '🤘',
      F: '🖐️',
      G: '👌',
      H: '🖖',
      I: '👋',
      J: '🤞',
      K: '🤙',
      L: '🤟',
      M: '🤝',
      N: '👉',
      O: '👏',
      P: '🤚',
      Q: '✋',
      R: '🙌',
      S: '🤲',
      T: '👐',
      U: '🤗',
      V: '🤭',
      W: '🤫',
      X: '🤔',
      Y: '🙏',
      Z: '🤐',
      ' ': '🔲',
    };
  
    let aslText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      if (char in aslDict) {
        aslText += aslDict[char];
      }
    }
  
    return aslText;
  }
  