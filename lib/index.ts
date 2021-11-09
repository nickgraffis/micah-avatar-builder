import { createAvatar } from './core'
import * as components from './components';
import { AvatarBuilder, CreateAvatarInputOptions, MicahAvatar } from './types';

const avatar: AvatarBuilder<MicahAvatar> = {
  options: {},
  meta: {
    title: 'Avatar Illustration System',
    creator: 'Micah Lanier',
    source: 'https://www.figma.com/community/file/829741575478342595',
    license: {
      name: 'CC BY 4.0',
      url: 'https://creativecommons.org/licenses/by/4.0/',
    },
  },
  create(input) {
    this.options = {
      size: 320, // default size
      avatar: { // default avatar
        shirt: { style: 'collared', color: 'Lavendar' },
        collar: { color: 'Calm', style: null },
        glasses: { style: 'round', color: 'Canary' },
        nose: { style: 'curve', color: 'Topaz' },
        eyebrows: { style: 'up', color: 'Black' },
        eyes: { style: 'round', color: 'Black' },
        eyeshadow: { style: null, color: 'Calm' },
        hair: { style: 'turban', color: 'White' },
        mouth: { style: 'smile', color: 'Black' },
        ears: { style: 'attached', color: 'Topaz' },
        background: { color: 'Apricot', style: null },
        base: { color: 'Topaz', style: 'standard' },
        earrings: { color: 'Canary', style: null },
        facialHair: { color: 'Topaz', style: null },
      },
      ...input
    }

    return {
      attributes: {
        viewBox: '0 0 360 360',
        fill: 'none',
      },
      body: `
        <g transform="translate(80 23)" data-avatar-attribute="micah-base">
          ${this.options.avatar ? components['base'][this.options.avatar.base.style](this.options.avatar) : ''}
        </g>
        <g transform="translate(170 183)" data-avatar-attribute="micah-mouth">
          ${this.options.avatar ? components['mouth'][this.options.avatar.mouth.style](this.options.avatar) : ''}
        </g>
        <g transform="translate(110 102)" data-avatar-attribute="micah-eyebrows">
          ${this.options.avatar ? components['eyebrows'][this.options.avatar.eyebrows.style](this.options.avatar) : ''}
        </g>
        <g transform="translate(49 11)" data-avatar-attribute="micah-hair">
          ${this.options.avatar ? components['hair'][this.options.avatar.hair.style](this.options.avatar) : ''}
        </g>
        <g transform="translate(142 119)" data-avatar-attribute="micah-eyes">
          ${this.options.avatar ? components['eyes'][this.options.avatar.eyes.style](this.options.avatar) : ''}
        </g>
        <g transform="rotate(-8 1149.438 -1186.916)" data-avatar-attribute="micah-nose">
          ${this.options.avatar ? components['nose'][this.options.avatar.nose.style](this.options.avatar) : ''}
        </g>
        <g transform="translate(84 154)" data-avatar-attribute="micah-ears">
          ${this.options.avatar ? components['ears'][this.options.avatar.ears.style](this.options.avatar) : ''}
        </g>
        <g transform="translate(53 272)" data-avatar-attribute="micah-shirt">
          ${this.options.avatar ? components['shirt'][this.options.avatar.shirt.style](this.options.avatar) : ''}
        </g>
      `,
    };
  }
}

export const newAvatar = 
  (options: CreateAvatarInputOptions<MicahAvatar>): string => 
    createAvatar(
      avatar.create(options), 
      { meta: avatar.meta, options: avatar.options }
    );