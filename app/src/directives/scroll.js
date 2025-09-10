function scroll(el, modifiers) {
  const position = modifiers.top ? 0 : el.scrollHeight
  el.parentElement.scrollTop = position
}

export default {
  mounted(el, { modifiers }) {
    scroll(el, modifiers)
  },
  updated(el, { modifiers }) {
    scroll(el, modifiers)
  }
}
