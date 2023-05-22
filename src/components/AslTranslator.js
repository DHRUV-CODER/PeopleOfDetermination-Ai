export function textToASL(text) {
    const aslDict = {
      A: "../../public/a.JPG",
      B: "../../public/b.JPG",
      C: "../../public/c.JPG",
      D: "../../public/d.JPG",
      E: "../../public/e.JPG",
      F: "../../public/f.JPG",
      G: "../../public/g.JPG",
      H: "../../public/h.JPG",
      I: "../../public/i.JPG",
      J: "../../public/j.JPG",
      K: "../../public/k.JPG",
      L: "../../public/l.JPG",
      M: "../../public/m.JPG",
      N: "../../public/n.JPG",
      O: "../../public/o.JPG",
      P: "../../public/p.JPG",
      Q: "../../public/q.JPG",
      R: "../../public/r.JPG",
      S: "../../public/s.JPG",
      T: "../../public/t.JPG",
      U: "../../public/u.JPG",
      V: "../../public/v.JPG",
      W: "../../public/w.JPG",
      X: "../../public/x.JPG",
      Y: "../../public/y.JPG",
      Z: "../../public/z.JPG",
      ' ': '../../public/idk.JPG',
    };
  
    let aslText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toUpperCase();
      if (char in aslDict) {
        aslText += aslDict[char];
      } else {
        aslText += char; // Append the character if no ASL image URL is found
      }
    }
  
    return aslText;
  }
  