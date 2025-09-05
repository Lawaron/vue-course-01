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

function resolveModifier(availableOptions, modifiers, defaultValue) {
  return availableOptions.find(p => modifiers[p])
    || defaultValue
}

function buildOptionsFromModifiers(value, modifiers) {
  return {
    text: value || "",
    html: modifiers.html || false,
    placement: resolveModifier(
      availablePlacements,
      modifiers,
      defaultPlacement
    ),
    trigger: resolveModifier(
      availableTriggers,
      modifiers,
      defaultTrigger
    )
  }
}
