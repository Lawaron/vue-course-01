import { Tooltip } from "bootstrap"
import { buildTooltipOptions } from "@/utils/buildtooltipOptions"

const vTooltip = {
  mounted(el, binding) {
    const options = buildTooltipOptions(binding)
    el.setAttribute("title", options.text)
    new Tooltip(el, options)
  },
  updated(el, binding) {
    const options = buildTooltipOptions(binding)
    el.setAttribute("title", options.text)

    const tooltip = Tooltip.getInstance(el)
    if (tooltip) {
      tooltip.setContent({ ".tooltip-inner": options.text })
    }
  },
  unmounted(el) {
    const tooltip = Tooltip.getInstance(el)
    if (tooltip) {
      tooltip.dispose()
    }
  }
}

export default vTooltip
