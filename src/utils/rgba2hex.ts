interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

export default ({ r, g, b, a }: RGBA): string => {
  let r2: string = r.toString(16)
  let g2: string = g.toString(16)
  let b2: string = b.toString(16)
  let a2: string = Math.round(a * 255).toString(16)

  if (r2.length === 1)
    r2 = '0' + r
  if (g2.length === 1)
    g2 = '0' + g
  if (b2.length === 1)
    b2 = '0' + b
  if (a2.length === 1)
    a2 = '0' + a

  return '#' + r2 + g2 + b2 + a2
}