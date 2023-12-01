export const mixArray = (array1: string[], array2: string[]) => {
  const result: string[] = [];

  // Determine the length of the resulting array
  const maxLength = Math.max(array1.length, array2.length);
  // Interleave elements until both arrays are empty

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      result.push(array1[i]);
    }

    if (i < array2.length) {
      result.push(array2[i]);
    }
  }

  return result;
};
