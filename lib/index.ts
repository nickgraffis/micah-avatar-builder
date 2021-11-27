import { createAvatar } from './core'
import { components } from './components'
import { AvatarBuilder, CreateAvatarInputOptions, MicahAvatar, MicahColor, MicahEarRingStyle, MicahEarsStyle, MicahEyebrowsStyle, MicahEyesStyle, MicahFacialHairStyle, MicahGlassesStyle, MicahHairStyle, MicahMouthStyle, MicahNoseStyle, MicahShirtStyle } from './types';
import { colorMap } from './color-map';

const generatehash = (seed?: string) => {
  seed = seed || Math.random().toString(36).substring(2, 15)
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }

  return Math.abs(hash)
}

const pickColor = (hash: number, item: string, acceptableColors?: MicahColor[]): MicahColor => {
  const itemHash = generatehash(hash.toString() + item)
  const colors: MicahColor[] = acceptableColors || Object.keys(colorMap) as MicahColor[]
  return colors[itemHash % colors.length]
}

const handleEdgeCase = (): string[] => ['']

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
  seed: '',
  input: {},
  create(input) {
    this.input = input
    this.seed = typeof input === 'string' ? input : input?.seed ? input.seed : ''
    const hash = generatehash(this.seed || undefined)
    this.options = typeof input === 'string' ? {} : input
    typeof input !== 'string' && console.log(input?.avatar?.shirt?.style)
    this.options = {
      size: typeof input !== 'string' && input.size || 700,
      avatar: {
        shirt: { 
          style: 
            typeof input !== 'string' && input?.avatar?.shirt?.style || 
            this.pickStyle<MicahShirtStyle>(hash, 'shirt'), 
          color: 
            typeof input !== 'string' && input?.avatar?.shirt?.color || 
            pickColor(hash, 'shirt') 
        },
        collar: { 
          color: 
            typeof input !== 'string' && input?.avatar?.collar?.color || 
            pickColor(hash, 'collar'), 
          style: null
        },
        glasses: { 
          style: 
            typeof input !== 'string' && input?.avatar?.glasses?.style || 
            this.pickStyle<MicahGlassesStyle>(hash, 'glasses'), 
          color: 
            typeof input !== 'string' && input?.avatar?.glasses?.color || 
            pickColor(hash, 'glasses', ['Calm', 'White', 'Canary', 'Black', 'Mellow'])
        },
        nose: { 
          style: 
            typeof input !== 'string' && input?.avatar?.nose?.style || 
            this.pickStyle<MicahNoseStyle>(hash, 'nose'),
          color: null
        },
        eyebrows: { 
          style: 
            typeof input !== 'string' && input?.avatar?.eyebrows?.style || 
            this.pickStyle<MicahEyebrowsStyle>(hash, 'eyebrows'), 
          color: 
            typeof input !== 'string' && 
            input?.avatar?.eyebrows?.color || 'Black'
        },
        eyes: { 
          style: 
            typeof input !== 'string' && input?.avatar?.eyes?.style || 
            this.pickStyle<MicahEyesStyle>(hash, 'eyes'),
          color: 'Black' 
        },
        eyeshadow: { 
          style: null, 
          color: 
            typeof input !== 'string' && input?.avatar?.eyeshadow?.color || 
            pickColor(
              hash, 
              'eyeshadow', 
              ['Apricot', 'Azure', 'Calm', 'Canary', 'Coast', 'Lavendar', 'Mellow', 'Salmon', 'Seashell', 'Sky']
            )
        },
        hair: { 
          style: 
            typeof input !== 'string' && input?.avatar?.hair?.style || 
            this.pickStyle<MicahHairStyle>(hash, 'hair'),
          color: 
            typeof input !== 'string' && input?.avatar?.hair?.color || 
            pickColor(
              hash, 
              'hair', 
              (Object.keys(colorMap) as MicahColor[])
                .filter(color => color !== pickColor(hash, 'background', [
                  'Apricot', 'Calm', 'Canary', 
                  'Lavendar', 'Sky', 'Salmon', 
                  'Seashell', 'Azure', 'Mellow'
                ]))
            )
        },
        mouth: { 
          style: 
            typeof input !== 'string' && input?.avatar?.mouth?.style || 
            this.pickStyle<MicahMouthStyle>(hash, 'mouth'),
          color: 'Black' 
        },
        ears: { 
          style: 
            typeof input !== 'string' && input?.avatar?.ears?.style || 
            this.pickStyle<MicahEarsStyle>(hash, 'ears'),
          color: null
        },
        background: { 
          color: 
            typeof input !== 'string' && input?.avatar?.background?.color || 
            pickColor(hash, 'background', [
              'Apricot', 'Calm', 'Canary', 
              'Lavendar', 'Sky', 'Salmon', 
              'Seashell', 'Azure', 'Mellow'
            ]), 
          style: null 
        },
        base: { 
          color: 
            typeof input !== 'string' && input?.avatar?.base?.color || 
            pickColor(hash, 'base', ['Topaz', 'Apricot', 'Coast']), 
          style: 'standard' 
        },
        earrings: { 
          color: 
            typeof input !== 'string' && input?.avatar?.earrings?.color || 
            pickColor(
              hash, 
              'earrings', 
              ((Object.keys(colorMap) as MicahColor[]) as MicahColor[])
                .filter(color => color !== pickColor(
                  hash, 
                  'background', [
                    'Apricot', 'Calm', 'Canary', 
                    'Lavendar', 'Sky', 'Salmon', 
                    'Seashell', 'Azure', 'Mellow'
                  ])
              )
            ), 
          style: 
            typeof input !== 'string' && input?.avatar?.earrings?.style || 
            this.pickStyle<MicahEarRingStyle>(hash, 'earrings') 
        },
        facialHair: { 
          color: 
            typeof input !== 'string' && input?.avatar?.facialHair?.color || 
            pickColor(
              hash, 
              'hair', 
              (['Topaz', 'Apricot', 'Coast'] as MicahColor[])
                .filter(color => color !== pickColor(
                  hash, 
                  'base', 
                  ['Topaz', 'Apricot', 'Coast']
                )
              )
            ),
          style: 
            typeof input !== 'string' && input?.avatar?.facialHair?.style || 
            this.pickStyle<MicahFacialHairStyle>(hash, 'facialHair')  
        },
      },
      ...(typeof input !== 'string') && { input }
    }

    return {
      attributes: {
        viewBox: '0 0 360 360',
        fill: 'none',
      },
      body: `
        <g transform="translate(25 36) scale(.9)">
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
        </g>
      `,
    };
  },
  // hasValidInput<T extends string>(key: keyof CreateAvatarInputOptions<MicahAvatar> | `avatar.${T}.`) {
  //   if (typeof this.input === 'string') return false
  //   if (!this.input[key]) return false
    
  // },
  pickStyle<T extends string | null>(hash: number, type: keyof MicahAvatar) {
    const styles = type !== 'collar' && 
    type !== 'eyeshadow' &&
    type !== 'background' ? Object.keys(components[type]) : handleEdgeCase()
    if (type === 'facialHair' || type === 'glasses' || type === 'earrings') {
      const possibleStyles = styles
      const probability = this.options[
        type === 'facialHair' ? 
          'facialHairProbability' : 
          type === 'glasses' ? 
            'glassesProbability': 
            'earringsProbability'] || 
        type === 'facialHair' ? 
          .1 :
          type === 'glasses' ?
            .4 : .2 

      for (let i = 0; i < probability * 100; i++) {
        if (i % 2 === 0) {
          styles.push(possibleStyles[1])
        } else {
          styles.push(possibleStyles[0])
        }
      }
      for (let i = 0; i < (1 - probability) * 100; i++) {
        styles.push('')
      }
    }
    return styles[hash % styles.length] as T
  }
}

export const newAvatar = 
  (options: CreateAvatarInputOptions<MicahAvatar>): string => 
    createAvatar(
      avatar.create(options), 
      { meta: avatar.meta, options: avatar.options }
    );


// Give a list of svgs sections with the g function or a path function
const g = (body: callback, attributes: any /* SVG Attributes */, children: any /** g func */) => {
  const context = createContext()
  return `<g ${utils.svg.groupAttributes(attributes)}>
    ${body(context)}
  </g>`
}
const path = (body: callback, attributes: any /* SVG Attributes */, children: any /** g func */) => {
  return `<path ${utils.svg.pathAttributes(attributes)}>
    ${body}
  </path>`
}
// list of attributes are like so
// { base: g(body, attributes) }
// you can also nest
// { eyes: g(body, attribues, { eyeshadow: g(body, attributes) } ) }
// An example of the body function would be:
const base = (context) => `body and ${context}`
//you need to give an object of context and options
