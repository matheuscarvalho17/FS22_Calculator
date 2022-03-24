export function roundNumber(number: number) {
  return (Math.round(number * 100) / 100).toFixed(2);
}

export function onlyNumberAndDot(value: string) {
  return value
    .replace(/[a-zA-Z!@#$%^&*()_+\-=\[\]{}°ºª§;':"\~`´\|<>\/?]/g, '')
    .replace(/\,/g, '.')
    .replace(/\.\./g, '.');
}
