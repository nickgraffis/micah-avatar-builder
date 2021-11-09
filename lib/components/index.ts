import { base } from './base';
import { mouth } from './mouth';
import { eyebrows } from './eyebrows';
import { hair } from './hair';
import { eyes } from './eyes';
import { nose } from './nose';
import { ears } from './ears';
import { shirt } from './shirt';
import { earrings } from './earrings';
import { glasses } from './glasses';
import { facialHair } from './facialHair';
import { MicahAvatar } from '../types';

export const components: {
  base: { [key in MicahAvatar['base']['style']]: (allComponents: MicahAvatar) => string },
  mouth: { [key in MicahAvatar['mouth']['style']]: (allComponents: MicahAvatar) => string },
  eyebrows: { [key in MicahAvatar['eyebrows']['style']]: (allComponents: MicahAvatar) => string },
  hair: { [key in MicahAvatar['hair']['style']]: (allComponents: MicahAvatar) => string },
  eyes: { [key in MicahAvatar['eyes']['style']]: (allComponents: MicahAvatar) => string },
  nose: { [key in MicahAvatar['nose']['style']]: (allComponents: MicahAvatar) => string },
  ears: { [key in MicahAvatar['ears']['style']]: (allComponents: MicahAvatar) => string },
  shirt: { [key in MicahAvatar['shirt']['style']]: (allComponents: MicahAvatar) => string },
  earrings: { [key in 'stud' | 'hoop']: (allComponents: MicahAvatar) => string },
  glasses: { [key in 'round' | 'square']: (allComponents: MicahAvatar) => string },
  facialHair: { [key in 'scruff' | 'beard']: (allComponents: MicahAvatar) => string },
} = {
  base,
  mouth,
  eyebrows,
  hair,
  eyes,
  nose,
  ears,
  shirt,
  earrings,
  glasses,
  facialHair,
}