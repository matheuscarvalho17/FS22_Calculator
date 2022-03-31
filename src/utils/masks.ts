export function roundNumber(number: number, decimals: number) {
  return (Math.round(number * 100) / 100).toFixed(decimals);
}

export function onlyNumberAndDot(value: string) {
  return value
    .replace(/[a-zA-Z!@#$%^&*()_+\-=\[\]{}°ºª§;':"\~`´\|<>\/?]/g, '')
    .replace(/\,/g, '.')
    .replace(/\.\./g, '.');
}
