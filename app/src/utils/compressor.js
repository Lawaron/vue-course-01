import pako from 'pako'

export const compress = (fileToCompress) => {
  const compressedData = pako.deflate(fileToCompress)
  const encodedBase64 = btoa(String.fromCharCode.apply(null, compressedData))

  return encodedBase64
}

export const decompress = (encodedBase64) => {
  const decodedBase64 = atob(encodedBase64)
  const rawData = pako.inflate(decodedBase64.split('').map((c) => c.charCodeAt(0)))

  return rawData
}
