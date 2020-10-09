const convertBase = (num, baseFrom, baseTo) => {
  const conversionValue = parseInt(num, baseFrom).toString(baseTo);
  return conversionValue === 'NaN' ? '' : conversionValue;
};

const BaseConvertor = {
  binaryToOctal: num => convertBase(num, 2, 8),
  binaryToDecimal: num => convertBase(num, 2, 10),
  binaryToHexaDecimal: num => convertBase(num, 2, 16),
  octalToBinary: num => convertBase(num, 8, 2),
  octalToDecimal: num => convertBase(num, 8, 10),
  octalToHexDecimal: num => convertBase(num, 8, 16),
  decimalToBinary: num => convertBase(num, 10, 2),
  decimalToOctal: num => convertBase(num, 10, 8),
  decimalToHexaDecimal: num => convertBase(num, 10, 16),
  hexaDecimalToBinary: num => convertBase(num, 16, 2),
  hexaDecimalToOctal: num => convertBase(num, 16, 8),
  hexaDecimalToDecimal: num => convertBase(num, 16, 10),
};

export default BaseConvertor;
