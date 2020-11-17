export const ellipse = (str: string, maxLength = 10, size = 7): string => {
  const len = str.length;

  if (len <= maxLength) {
    return str;
  }

  const left = str.substring(0, size);
  const right = str.substring(len - size);
  return `${left}...${right}`;
};
