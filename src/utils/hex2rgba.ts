interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

export default (hex: string, alpha: number = 1): RGBA => {
  const [r, g, b]: number[] = hex ? (hex as any).match(/\w\w/g).map((x: any) => parseInt(x, 16)) : [0,0,0,1];
  // return `rgba(${r},${g},${b},${alpha})`;
  return { r, g, b, a: alpha }
};