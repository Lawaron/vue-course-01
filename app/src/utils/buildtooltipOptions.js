const availablePlacements = [
  "top",
  "bottom",
  "left",
  "right"
]
const availableTriggers = [
  "click",
  "focus",
  "manual",
  "hover"
]

export function buildTooltipOptions(binding) {
  const { value, modifiers } = binding

  let defaultPlacement = "top"
  let defaultTrigger = "hover focus"

  if (typeof value === "object") {
    return {
      text: value.text || "",
      placement: value.placement || defaultPlacement,
      trigger: value.trigger || defaultTrigger
    }
  }

  return {
    text: value || "",
    placement: availablePlacements.find(p => modifiers[p])
      || defaultPlacement,
    trigger: availableTriggers.find(t => modifiers[t])
      || defaultTrigger
  }
}
