function memoize<T extends Function, E extends Object>(fn: T, context: E) {
  const cacheStore: Map<string, any> = new Map();

  return function (...args: unknown[]) {
    const cacheKey = JSON.stringify(args);

    if (!cacheStore.has(cacheKey)) {
      const result = fn.call(context || this, ...args);
      cacheStore.set(cacheKey, result);
    }

    return cacheStore.get(cacheKey);
  };
}
