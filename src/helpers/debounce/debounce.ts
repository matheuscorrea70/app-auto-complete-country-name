const TIMEOUT_DEFAULT_DELAY = 500;

export function debounce<F extends (...args: Parameters<F>) => void>(
  func: F,
  delay = TIMEOUT_DEFAULT_DELAY
) {
  let timeout: number | undefined = undefined;

  return (...args: Parameters<F>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
