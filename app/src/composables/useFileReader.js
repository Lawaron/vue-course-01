import { ref } from 'vue'

const useFileReader = (types) => {
  const imageData = ref(null)
  const reader = new FileReader()

  const onFileChange = (event) => {
    const file = event.target.files[0]

    if (!file) return

    if (!types.includes(file?.type)) return

    reader.onload = (e) => {
      imageData.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
  return { imageData, onFileChange }
}

export default useFileReader
