namespace TypeNarrowing {

  const isString = (value: any): value is string => {
    return !!value && (typeof value === 'string' || value instanceof String);
  };

  const toNumber = (value: string | number): number => {
    return parseInt(value, 10); // cannot parseInt on a number
  }

  const toNumber = (value: string | number): number => {
    if (isString(value)) {
      return parseInt(value, 10);
    }

    return value;
  }

}
