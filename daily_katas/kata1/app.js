function reorderString(string) {
    let reordered = "";
    let curChar;
  
    for (let i = 0; i < string.length; i++) {
      curChar = string[i];
      if (curChar.toUpperCase() === curChar && isNaN(curChar)) {
        reordered += curChar;
      }
    }
  
    for (let i = 0; i < string.length; i++) {
      curChar = string[i];
      if (string[i].toLowerCase() === curChar && isNaN(curChar)) {
        reordered += curChar;
      }
    }
  
    for (let i = 0; i < string.length; i++) {
      curChar = string[i];
      if (!isNaN(Number(curChar))) {
        reordered += curChar;
      }
    }
  
    console.log(reordered);
  }
  
  reorderString("hA2p4Py");
  reorderString("m11oveMENT");
  reorderString("s9hOrt4CAKE");