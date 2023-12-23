export function randomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 5)) + min;
}
