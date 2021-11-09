import React, { useState, createContext, useContext, useMemo } from 'react'
import { AttributeDrill, AttributeValue, Avatar, AvatarContextType, Color, SetStateByAttribute, State } from '../types';

const initialState: State<Avatar> = {
  avatar: {
    shirt: { style: 'crew', color: 'Lavendar' },
    collar: { color: 'Calm', style: null },
    glasses: { style: 'round', color: 'Canary' },
    nose: { style: 'curve', color: 'Topaz' },
    eyebrows: { style: 'up', color: 'Black' },
    eyes: { style: 'round', color: 'Black' },
    eyeshadow: { style: null, color: null },
    hair: { style: 'turban', color: 'White' },
    mouth: { style: 'smile', color: 'Black' },
    ears: { style: 'attached', color: 'Topaz' },
    background: { color: 'Apricot', style: null },
    base: { color: 'Topaz', style: null },
    earRing: { color: 'Canary', style: null },
    facialHair: { color: 'Topaz', style: null },
  },
  tab: 'color',
  selected: '',
  error: null
}

const AvatarContext = 
  createContext<AvatarContextType | null>(null);

type Props = {
  children: React.ReactNode
}

export const AvatarProvider = ({ children }: Props) => {
  const [state, setState] = useState<State<Avatar>>(initialState);

  const set = (obj: any, str: string | string[], value: any): void => {
    if (typeof str == 'string'){
      return set(obj, str.split('.'), value);
    } else if (str.length==1 && value !== undefined){
      return obj[str[0]] = value;
    } else if (str.length==0){
      return obj;
    } else{
      return set(obj[str[0]], str.slice(1), value);
    }
  }

  const setAttribute = (
    attribute: AttributeDrill, 
    value: AttributeValue<typeof attribute>
  ) => {
    console.log(attribute, value);
    setState((prevState: State<Avatar>) => {
      set(prevState, attribute, value)
      return { ...prevState }
    })
    console.log(state)
  }

  return (
    <AvatarContext.Provider value={{state, setAttribute, setState}}>
      { children }
    </AvatarContext.Provider>
  )
}

export default function useAvatarContext() {
  return useContext(AvatarContext)
}
