export function isNumber(input: string) {
  return /^\d+\.?\d*$/.test(input)
}

export function isInteger(input: string) {
  return /^\d+$/.test(input)
}
