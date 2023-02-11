/* eslint-disable @typescript-eslint/no-explicit-any */

const chunk = (collection: any[], size?: number) => {
  const result = []
  size ||= 2

  for (let x = 0; x < Math.ceil(collection.length / size); x++) {
    const start = x * size
    const end = start + size
    result.push(collection.slice(start, end))
  }

  return result
}

export default chunk
