import { colorMap } from "../../src/Colors/color-map";
import { MicahAvatar } from "../types";

export const earrings: {
  [key in 'hoop' | 'stud']: (allComponents: MicahAvatar) => string
} = {
  'hoop': (allComponents: MicahAvatar,) => `
  <path data-avatar-attribute="micah-earrings" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24c0-6.391 3.5-11.5 6.572-16.5L7.5 6" stroke="${colorMap[allComponents.earrings.color]}" stroke-width="4"/>
`,
  'stud': (allComponents: MicahAvatar) => `
  <circle data-avatar-attribute="micah-earrings" cx="25" cy="2" r="4" fill="${colorMap[allComponents.earrings.color]}"/>
  <circle data-avatar-attribute="micah-earrings" cx="26" cy="1" r="1" fill="#fff"/>
`,
}
