const convertBase = (num, baseFrom, baseTo) =>
  parseInt(num, baseFrom).toString(baseTo);

const BaseConvertor = {
  bin2octa: num => +convertBase(num, 2, 8),
  bin2dec : num => +convertBase(num, 2, 10),
  octa2bin: num => +convertBase(num, 8, 2),
  oct2dec : num => +convertBase(num, 8, 10),
  dec2bin : num => +convertBase(num, 10, 2),
  dec2octa: num => +convertBase(num, 10, 8),
};

export default BaseConvertor;
