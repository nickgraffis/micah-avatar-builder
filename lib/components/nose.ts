import { MicahAvatar } from "../types";

export const nose: {
  [key in MicahAvatar['nose']['style']]: (allComponents: MicahAvatar) => string
} = {
  'curve': (allComponents: MicahAvatar) => `
  <path data-avatar-attribute="micah-nose" d="M16.5 7c-.333 3.833 0 12.2 4 15 5 3.5-.5 12-10.5 10" stroke="#000" stroke-width="4"/>
`,
  'pointed': (allComponents: MicahAvatar) => `
  <path data-avatar-attribute="micah-nose" d="M16.5 3c0 14 7 25 7 25S20 34 10 32" stroke="#000" stroke-width="4"/>
`,
  'round': (allComponents: MicahAvatar) => `
  <path data-avatar-attribute="micah-nose" d="M12.307 12.34c5.446-1.24 14.377.62 12.417 10.543-1.743 8.82-11.11 9.303-13.724 6.822" stroke="#000" stroke-width="4"/>
`,
}
