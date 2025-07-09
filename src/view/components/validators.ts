
export const isNumber = (val: any) => {
  return typeof val === 'number' && !isNaN(val)
}

export const inRange = (val: number, min: number, max: number) => {
  return val >= min && val <= max;
}

export const minLength = (val: string, minLength: number) => {
  return val.length >= minLength;
}

export const maxLength = (val: string, maxLength: number) => {
  return val.length <= maxLength;
}

export const required = (val?: any) => {
  return val == undefined || val == "";
}
