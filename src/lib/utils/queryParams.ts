export const objectToQueryParams = (params: { [key: string]: any }): string => {
  const queryParams = [];

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      let value = params[key];

      if (key === 'type') {
        if (Array.isArray(value)) {
          value = value.map((item: any) => item.value).join(',');
        }
      }

      if (value !== undefined && value !== null && value !== '') {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(value);
        queryParams.push(`${encodedKey}=${encodedValue}`);
      }
    }
  }

  return `?${queryParams.join('&')}`;
}

export const isObjectEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
}

export const objectToArray = (data: any) => {
  return Object.keys(data);
}
