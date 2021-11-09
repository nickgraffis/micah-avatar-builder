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
    color: MicahColor,
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
    color: MicahColor,
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
  size?: number | string
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
  create: (options: CreateAvatarInputOptions<C>) => AvatarPreBuild,
  options: CreateAvatarInputOptions<C>
}