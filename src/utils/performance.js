export const measurePerformance = (componentName) => {
  const startTime = performance.now();

  return () => {
    const endTime = performance.now();
    const duration = endTime - startTime;

    // Log performance metrics
    console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);

    // Report to analytics if needed
    if (duration > 100) { // Threshold for slow renders
      // Report to your analytics service
      console.warn(`Slow render detected in ${componentName}`);
    }
  };
};

// Usage in components:
useEffect(() => {
  const cleanup = measurePerformance('ComponentName');
  return cleanup;
}, []); 