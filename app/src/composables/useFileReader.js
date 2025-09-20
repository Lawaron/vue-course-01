import { ref } from 'vue'

const useFileReader = (types, maxSize) => {
  const error = ref(null)

  const imageData = ref(null)
  const reader = new FileReader()

  const onFileChange = (event) => {
    const file = event.target.files[0]

    if (!file) return

    if (!types.includes(file.type)) {
      error.value = `The ${file.type} format is not supported`
      return
    }

    if (file.size > maxSize) {
      error.value = `The file size is over ${maxSize} bytes`
      return
    }

    reader.onload = (e) => {
      imageData.value = e.target.result
    }
    reader.readAsDataURL(file)
  }

  return { error, imageData, onFileChange }
}

export default useFileReader
