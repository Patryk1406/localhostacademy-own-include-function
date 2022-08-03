function includes(array: unknown[], elementToFind: unknown, fromIndex: number): boolean {
  return array.indexOf(elementToFind, fromIndex) !== -1;
}