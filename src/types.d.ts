export interface State<A> {
  avatar: A,
  tab: 'color' | 'style',
  selected: keyof A | '',
  error: Error | null
}

export type Avatar = {
  shirt: {
    color: Color,
    style: ShirtStyle
  },
  collar: {
    color: Color,
    style: null
  },
  glasses: {
    color: Color,
    style: GlassesStyle
  },
  facialHair: {
    color: Color,
    style: FacialHairStyle
  },
  nose: {
    color: Color,
    style: NoseStyle
  },
  eyebrows: {
    color: Color,
    style: EyebrowsStyle
  },
  eyes: {
    color: Color,
    style: EyesStyle
  },
  eyeshadow: {
    color: Color,
    style: null
  }
  hair: {
    color: Color,
    style: HairStyle
  },
  mouth: {
    color: Color,
    style: MouthStyle
  },
  earRing: {
    color: Color,
    style: EarRingStyle
  },
  ears: {
    color: Color,
    style: EarsStyle
  },
  background: {
    color: Color,
    style: null
  },
  base: {
    color: Color,
    style: 'standard'
  },
}

export type AvatarContextType = {
  state: State<Avatar>,
  setAttribute: SetStateByAttribute,
  setState: React.Dispatch<React.SetStateAction<State<Avatar>>>
 }

export type AttributeDrill = `avatar.${keyof Avatar}.${'color' | 'style'}` | keyof State<Avatar>
export type AttributeValue<Attribute extends AttributeDrill> = 
  Attribute extends 'tab' ? 'color' | 'style' : 
  Attribute extends 'error' ? Error : 
  Attribute extends 'selected' ? keyof Avatar | '' : 
  Attribute extends `avatar.${keyof Avatar}.style` ? Avatar[keyof Avatar]['style'] :
  Attribute extends `avatar.${keyof Avatar}.color` ? Color :
  never

export type SetStateByAttribute = ((attribute: AttributeDrill, value: AttributeValue<typeof attribute>) => void)

export type ShirtStyle = 'crew' | 'collared' | 'open'
export type GlassesStyle = 'square' | 'round'
export type FacialHairStyle = 'beard' | 'scruff'
export type NoseStyle = 'curve' | 'round' | 'pointed'
export type EyebrowsStyle = 'up' | 'down' | 'eyelashesUp' | 'eyelashesDown'
export type EyesStyle = 'eyes' | 'smiling' | 'eyeshadow' | 'round'
export type HairStyle = 'fonze' | 'mrT' | 'doug' | 'mrClean' | 'dannyPhantom' | 'full' | 'turban' | 'pixie'
export type MouthStyle = 'suprised' | 'laughing' | 'nervous' | 'smile' | 'sad' | 'pucker' | 'frown' | 'smirk'
export type EarRingStyle = 'hoop' | 'stud'
export type EarsStyle = 'attached' | 'detached'

export type Color = 'Apricot' | 'Coast' | 'Topaz' | 'Lavendar' | 'Sky' | 'Salmon' | 'Canary' | 'Calm' | 'Azure' | 'Seashell' | 'Mellow' | 'White' | 'Black'