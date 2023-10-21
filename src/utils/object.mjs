export function omitFields(object, ...args) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !args.includes(key))
  )
}
