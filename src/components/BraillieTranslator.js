export function textToBraille(text) {
    const brailleDict = {
      a: '⠁',
      b: '⠃',
      c: '⠉',
      d: '⠙',
      e: '⠑',
      f: '⠋',
      g: '⠛',
      h: '⠓',
      i: '⠊',
      j: '⠚',
      k: '⠅',
      l: '⠇',
      m: '⠍',
      n: '⠝',
      o: '⠕',
      p: '⠏',
      q: '⠟',
      r: '⠗',
      s: '⠎',
      t: '⠞',
      u: '⠥',
      v: '⠧',
      w: '⠺',
      x: '⠭',
      y: '⠽',
      z: '⠵',
      ' ': '⠀',
    };
  
    let brailleText = '';
    for (let char of text.toLowerCase()) {
      if (char in brailleDict) {
        brailleText += brailleDict[char];
      }
    }
  
    return brailleText;
  }
  