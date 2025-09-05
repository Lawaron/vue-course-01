const defaultPlacement = "top"
const defaultTrigger = "hover focus"

export function buildTooltipOptions(binding) {
  const { value, modifiers } = binding

  return (typeof value === "object")
    ? builOptionsFromValue(value)
    : buildOptionsFromModifiers(value, modifiers)
}

function builOptionsFromValue(value) {
  return {
    text: value.text || "",
    html: value.html || false,
    placement: value.placement || defaultPlacement,
    trigger: value.trigger || defaultTrigger
  }
}

function buildOptionsFromModifiers(value, modifiers) {
  const availablePlacements = ["top", "bottom", "left", "right"]
  const availableTriggers = ["click", "focus", "manual", "hover"]

  return {
    text: value || "",
    html: modifiers.html || false,
    placement: availablePlacements
      .find(p => modifiers[p]) || defaultPlacement,
    trigger: availableTriggers
      .find(t => modifiers[t]) || defaultTrigger
  }
}
