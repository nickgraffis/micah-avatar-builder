import { colorMap } from "../../src/Colors/color-map";
import { MicahAvatar } from "../types";
import * as components from '.'

export const eyes: {
  [key in MicahAvatar['eyes']['style']]: (allComponents: MicahAvatar) => string
} = {
  'eyes': (allComponents: MicahAvatar) => `
  <g data-avatar-attribute="micah-eyes" fill="#000">
    <ellipse data-avatar-attribute="micah-eyes" cx="16.53" cy="29.402" rx="9" ry="13.5" transform="rotate(-6.776 16.53 29.402)"/>
    <ellipse data-avatar-attribute="micah-eyes" cx="80.531" cy="19.402" rx="9" ry="13.5" transform="rotate(-6.276 80.531 19.402)"/>
  </g>
  <g data-avatar-attribute="micah-glasses" transform="translate(-40 -8)">
    ${allComponents.glasses.style ? components['glasses'][allComponents.glasses.style] : ''}
  </g>
`,
  'round': (allComponents: MicahAvatar) => `
  <g data-avatar-attribute="micah-eyes" fill="#000">
    <ellipse data-avatar-attribute="micah-eyes" cx="16.117" cy="28.927" rx="9" ry="10" transform="rotate(-6.776 16.117 28.927)"/>
    <ellipse data-avatar-attribute="micah-eyes" cx="80.149" cy="18.923" rx="9" ry="10" transform="rotate(-6.276 80.149 18.923)"/>
  </g>
  <g data-avatar-attribute="micah-glasses" transform="translate(-40 -8)">
    ${allComponents.glasses.style ? components['glasses'][allComponents.glasses.style](allComponents) : ''}
  </g>
`,
  'eyeshadow': (allComponents: MicahAvatar) => `
  <circle data-avatar-attribute="micah-eyeshadow" cx="15.24" cy="20.239" r="12" transform="rotate(-6.276 15.24 20.24)" fill="${colorMap[allComponents.eyeshadow.color]}"/>
  <ellipse data-avatar-attribute="micah-eyes" cx="16.53" cy="29.402" rx="9" ry="13.5" transform="rotate(-6.776 16.53 29.402)" fill="#000"/>
  <circle data-avatar-attribute="micah-eyeshadow" cx="79.019" cy="11.611" r="12" transform="rotate(-6.276 79.02 11.61)" fill="${colorMap[allComponents.eyeshadow.color]}"/>
  <ellipse data-avatar-attribute="micah-eyes" cx="80.531" cy="19.402" rx="9" ry="13.5" transform="rotate(-6.276 80.531 19.402)" fill="#000"/>
  <g>
    <g data-avatar-attribute="micah-glasses" transform="translate(-40 -8)">
      ${allComponents.glasses.style ? components['glasses'][allComponents.glasses.style](allComponents) : ''}
    </g>
  </g>
`,
  'smiling': (allComponents: MicahAvatar) => `
  <g data-avatar-attribute="micah-eyes" fill="#000">
    <path data-avatar-attribute="micah-eyes" d="M5.287 34.073c.114.813 1.147.994 1.722.408 2.465-2.516 6.255-4.365 10.654-4.887 2.595-.309 5.091-.12 7.316.472.754.2 1.495-.437 1.232-1.17-1.666-4.646-6.366-7.7-11.475-7.093-5.942.706-10.186 6.095-9.48 12.036l.03.234ZM69.385 24.073c.113.813 1.146.994 1.721.409 2.443-2.486 6.192-4.312 10.542-4.829 2.565-.304 5.032-.118 7.232.464.754.2 1.495-.438 1.23-1.171-1.654-4.594-6.306-7.611-11.362-7.01-5.886.699-10.09 6.037-9.39 11.923.008.071.017.143.027.213Z"/>
  </g>
  <g data-avatar-attribute="micah-glasses" transform="translate(-40 -8)">
    ${allComponents.glasses.style ? components['glasses'][allComponents.glasses.style](allComponents) : ''}
  </g>
`,
}
