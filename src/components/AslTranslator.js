export function textToASL(text) {
    const aslDict = {
      A: "/a.JPG",
      B: "/b.JPG",
      C: "/c.JPG",
      D: "/d.JPG",
      E: "/e.JPG",
      F: "/f.JPG",
      G: "/g.JPG",
      H: "/h.JPG",
      I: "/i.JPG",
      J: "/j.JPG",
      K: "/k.JPG",
      L: "/l.JPG",
      M: "/m.JPG",
      N: "/n.JPG",
      O: "/o.JPG",
      P: "/p.JPG",
      Q: "/q.JPG",
      R: "/r.JPG",
      S: "/s.JPG",
      T: "/t.JPG",
      U: "/u.JPG",
      V: "/v.JPG",
      W: "/w.JPG",
      X: "/x.JPG",
      Y: "/y.JPG",
      Z: "/z.JPG",
      ' ': '/idk.JPG',
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
  