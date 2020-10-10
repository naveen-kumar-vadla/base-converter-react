const convert = (num, baseFrom, baseTo) => {
  const conversionValue = parseInt(num, baseFrom).toString(baseTo);
  return conversionValue === 'NaN' ? '' : conversionValue;
};

export const Binary = num => ({
  base2Value: num,
  base8Value: convert(num, 2, 8),
  base10Value: convert(num, 2, 10),
  base16Value: convert(num, 2, 16),
});
export const Octal = num => ({
  base2Value: convert(num, 8, 2),
  base8Value: num,
  base10Value: convert(num, 8, 10),
  base16Value: convert(num, 8, 16),
});
export const Decimal = num => ({
  base2Value: convert(num, 10, 2),
  base8Value: convert(num, 10, 8),
  base10Value: num,
  base16Value: convert(num, 10, 16),
});
export const HexaDecimal = num => ({
  base2Value: convert(num, 16, 2),
  base8Value: convert(num, 16, 8),
  base10Value: convert(num, 16, 10),
  base16Value: num,
});
