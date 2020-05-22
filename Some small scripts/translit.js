function translit(text) {
    const rus = 'й ц у к е н г ш щ з х ъ ф ы в а п р о л д ж э ё я ч с м и т ь б ю'.split(
      / +/g
    );
    const eng = "q w e r t y u i o p [ ] a s d f g h j k l ; ' \\ z x c v b n m , .".split(
      / +/g
    );
    let x;
    for (x = 0; x < rus.length; x++) {
      text = text
        .split(eng[x])
        .join(rus[x]);
      text = text
        .split(eng[x].toUpperCase())
        .join(rus[x].toUpperCase());
    }
    return text;
  }
