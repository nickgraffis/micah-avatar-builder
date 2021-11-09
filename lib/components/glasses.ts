import { colorMap } from "../color-map";
import { MicahAvatar } from "../types";

export const glasses: {
  [key in 'square' | 'round']: (allComponents: MicahAvatar) => string
} = {
  'round': (allComponents: MicahAvatar) => `
  <g data-avatar-attribute="micah-glasses" stroke="${colorMap[allComponents.glasses.color]}" stroke-width="4">
    <circle data-avatar-attribute="micah-glasses" cx="122.5" cy="28" r="26"/>
    <circle data-avatar-attribute="micah-glasses" cx="55.5" cy="37" r="26"/>
    <path data-avatar-attribute="micah-glasses" d="M97.5 35a8 8 0 0 0-16 0M30 39 0 44.5"/>
  </g>
`,
  'square': (allComponents: MicahAvatar) => `
  <g data-avatar-attribute="micah-glasses" stroke="${colorMap[allComponents.glasses.color]}" stroke-width="4">
    <path data-avatar-attribute="micah-glasses" d="M34.5 42.5 0 49.125" stroke-linecap="round"/>
    <path data-avatar-attribute="micah-glasses" d="m35.472 18.535 38.716-5.442a6 6 0 0 1 6.777 5.107l5.567 39.61a6 6 0 0 1-5.107 6.777l-34.472 4.845a6 6 0 0 1-6.654-4.478l-9.811-39.015a6 6 0 0 1 4.984-7.404ZM145.919 3.22l-38.716 5.44a6 6 0 0 0-5.107 6.777l5.567 39.611a6 6 0 0 0 6.777 5.107l34.472-4.845a6 6 0 0 0 5.162-6.139l-1.323-40.207a6 6 0 0 0-6.832-5.744ZM83.5 37.125l22-3.5"/>
  </g>
`,
}
