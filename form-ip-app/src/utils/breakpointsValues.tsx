export const breakpointsValues = (
  values: string[],
  breakpoints: string[] = ["xs", "sm"]
) => {
  return breakpoints?.reduce((acu: any, curr: string, idx: number) => {
    acu[curr] = values[idx];
    return acu;
  }, {});
};
