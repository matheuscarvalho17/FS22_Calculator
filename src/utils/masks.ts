export function roundNumber(number: number) {
  return (Math.round(number * 100) / 100).toFixed(1);
}

export function onlyNumber(value: string) {
  return value.replace(/\D/g, '');
}
