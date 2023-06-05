export function saveToLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get a value from local storage
export function getFromLocalStorage(key: string): any {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Remove a value from local storage
export function removeFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
