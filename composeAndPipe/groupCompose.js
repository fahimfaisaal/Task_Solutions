const groupCompose = ([...functionGroup], ...args) => (
  functionGroup.map(
    (fn) => Array.isArray(fn)
      ? compose(fn, ...args)
      : fn(...args)
  )
)

module.exports = groupCompose;