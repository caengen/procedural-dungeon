export default function flipPlusMinus(n: number) {
  if (n === 0) {
    return n;
  }

  return n < 0 ? Math.abs(n) : -n;
}
