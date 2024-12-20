export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Usage in components:
const debouncedScroll = useCallback(
  debounce((scrollPos) => {
    // Scroll handling logic
  }, 16), // ~60fps
  []
); 