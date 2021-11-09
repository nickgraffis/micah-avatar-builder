import React from "react"
import { MouthTooltip } from "./MouthTooltip";
import { colorMap } from "../../Colors/color-map";
import useAvatarContext from "../../Hooks/useAvatar";
import { Color } from "../../types";

export const Mouth = () => {
  const { state, setAttribute } = useAvatarContext() || {}
  if (!state || !setAttribute) return null
  return (
    <div 
    className={`absolute top-[53.42%] ml-5
    cursor-pointer`} 
    >
      {
        state.avatar.mouth.style === 'smile' && 
          <MouthTooltip>
            <svg 
            onClick={() => state.selected === 'mouth' ? setAttribute('selected', '') : setAttribute('selected', 'mouth')}width="67" height="64" viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23" stroke={colorMap[state.avatar.mouth.color as Color] || 'black'} stroke-width="4"/>
            </svg>
          </MouthTooltip>
      }
    </div>
  )
}