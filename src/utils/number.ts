export const sanitizeToFloat = (value: string): number => {
  value = value.replace(/[^0-9.]+/, '');
  if (value.includes('.') && value.includes(',')) {
    value = value.replace(/\./g, '').replace(',', '.');
  } else if (value.includes(',')) {
    value = value.replace(',', '.');
  }
  return parseFloat(value) || 0;
};
