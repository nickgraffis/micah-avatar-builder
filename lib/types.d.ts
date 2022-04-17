// MICAH AVATAR SYSTEM //
export type MicahAvatar = {
  shirt: {
    color: MicahColor,
    style: MicahShirtStyle
  },
  collar: {
    color: MicahColor,
    style: null
  },
  glasses: {
    color: MicahColor,
    style: MicahGlassesStyle
  },
  facialHair: {
    color: MicahColor,
    style: MicahFacialHairStyle
  },
  nose: {
    color: null,
    style: MicahNoseStyle
  },
  eyebrows: {
    color: MicahColor,
    style: MicahEyebrowsStyle
  },
  eyes: {
    color: MicahColor,
    style: MicahEyesStyle
  },
  eyeshadow: {
    color: MicahColor,
    style: null
  }
  hair: {
    color: MicahColor,
    style: MicahHairStyle
  },
  mouth: {
    color: MicahColor,
    style: MicahMouthStyle
  },
  earrings: {
    color: MicahColor,
    style: MicahEarRingStyle
  },
  ears: {
    color: null,
    style: MicahEarsStyle 
  },
  background: {
    color: MicahColor,
    style: null
  },
  base: {
    color: MicahColor,
    style: 'standard'
  },
}

export type MicahShirtStyle = 'crew' | 'collared' | 'open'
export type MicahGlassesStyle = 'square' | 'round' | null
export type MicahFacialHairStyle = 'beard' | 'scruff' | null
export type MicahNoseStyle = 'curve' | 'round' | 'pointed'
export type MicahEyebrowsStyle = 'up' | 'down' | 'eyelashesUp' | 'eyelashesDown'
export type MicahEyesStyle = 'eyes' | 'smiling' | 'eyeshadow' | 'round'
export type MicahHairStyle = 'fonze' | 'mrT' | 'doug' | 'mrClean' | 'dannyPhantom' | 'full' | 'turban' | 'pixie'
export type MicahMouthStyle = 'surprised' | 'laughing' | 'nervous' | 'smile' | 'sad' | 'pucker' | 'frown' | 'smirk'
export type MicahEarRingStyle = 'hoop' | 'stud' | null
export type MicahEarsStyle = 'attached' | 'detached'

export type MicahColor = 'Apricot' | 'Coast' | 'Topaz' | 'Lavendar' | 'Sky' | 'Salmon' | 'Canary' | 'Calm' | 'Azure' | 'Seashell' | 'Mellow' | 'White' | 'Black'

export type CreateAvatarInputOptions<T> = {
  avatar?: T,
  seed?: string,
  size?: number | string,
  facialHairProbability?: number,
  glassesProbability?: number,
  earringsProbability?: number,
  shape?: 'circle' | 'square'
}

export type MetaData = {
  title: string,
  creator: string,
  source: string,
  license: {
    name: string,
    url: string
  }
}

export type SVGAttributes = {
  viewBox: string,
  fill: string,
  width?: number | string,
  height?: number | string,
  head?: MetaData
}

export type AvatarPreBuild = {
  attributes: SVGAttributes,
  body: string
}

export type AvatarBuilder<C> = {
  meta: MetaData,
  create: (options: CreateAvatarInputOptions<C> | string) => AvatarPreBuild,
  pickStyle<T extends string | null>(hash: number, type: keyof MicahAvatar): T,
  options: CreateAvatarInputOptions<C>,
  seed: string,
  input: CreateAvatarInputOptions<C> | string
}