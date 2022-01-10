import type { HelloWorld } from '../types'

export default function (options: HelloWorld): string {
  if (Object.prototype.toString.call(options) !== '[object Object]') {
    throw new Error(`The options must be an Object.`)
  }

  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      if (!options[key]) {
        throw new Error(`The "${key}" option must be not empty.`)
      }
    }
  }

  return `${options.action} ${options.name}!`
}
