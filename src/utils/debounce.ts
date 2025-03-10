export function debounce(func: (...args: any[]) => void, wait: number) {
  if (wait <= 0) {
    throw new Error('Wait time must be a positive number');
  }
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
