export const prefix = (location, ...prefixes) => {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  )
}
