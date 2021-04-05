export function isNumber(input: string) {
  return /\d+(\.\d+)?/.test(input)
}

export function hasMultipleDots(input: string) {
  return input.split('').filter(x => x == '.').length > 1
}
