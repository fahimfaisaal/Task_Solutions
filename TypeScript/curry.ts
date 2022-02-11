function curry<T extends Function, E extends Object>(fn: T, context: E) {
  const argumentsLength = fn.length;
  context ||= this;

  function deepCurry(...args: unknown[]) {
    if (args.length === argumentsLength) {
      return fn.call(context, ...args);
    }

    return deepCurry.bind(context, ...args);
  }

  return deepCurry;
}
