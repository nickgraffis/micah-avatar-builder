import React from "react"
import { ShirtTooltip } from "./ShirtTooltip";
import { ColorsTooltip } from "../../Colors/ColorsTooltip";
import { colorMap } from "../../Colors/color-map";
import useAvatarContext from "../../Hooks/useAvatar";
import { AvatarContextType, Color } from "../../types";
import { pathMap } from "../path-map";

export const Shirt = () => {
  const { state, setAttribute } = useAvatarContext() || {}
  if (!state || !setAttribute) return null
  return (
    <div 
    className={`absolute top-[292px]
    cursor-pointer`} 
    >
      {
        state.avatar.shirt.style === 'open' && 
        <svg 
        width="281" 
        height="93" 
        viewBox="0 0 281 93" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <ShirtTooltip>
            <path 
            onClick={() => state.selected === 'shirt' ? setAttribute('selected', '') : setAttribute('selected', 'shirt')}
            d={pathMap.shirt.open.shirt} 
            fill={colorMap[state.avatar.shirt.color as Color] || '#9287FF'} 
            stroke={state.selected === 'shirt' ? 'red' : 'black'} 
            strokeWidth={state.selected === 'shirt' ? '5.27431' : '4.27431'}
            />
          </ShirtTooltip>
        </svg>
      }
      {
        state.avatar.shirt.style === 'crew' &&
        <svg 
        width="281" 
        height="93" 
        viewBox="0 0 281 93" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <ShirtTooltip>
            <path 
            onClick={() => state.selected === 'shirt' ? setAttribute('selected', '') : setAttribute('selected', 'shirt')}
            d={pathMap.shirt.crew.shirt} 
            fill={colorMap[state.avatar.shirt.color as Color] || '#9287FF'} 
            stroke={state.selected === 'shirt' ? 'red' : 'black'} 
            strokeWidth={state.selected === 'shirt' ? '5.27431' : '4.27431'}
            />
          </ShirtTooltip>
          <ColorsTooltip attribute="collar">
            <path 
            onClick={() => state.selected === 'collar' ? setAttribute('selected', '') : setAttribute('selected', 'collar')}
            d={pathMap.shirt.crew.collar} 
            fill={colorMap[state.avatar.collar.color as Color] || '#9287FF'} 
            stroke={state.selected === 'collar' ? 'red' : 'black'} 
            strokeWidth={state.selected === 'collar' ? '5' : '4'}
            />
          </ColorsTooltip>
        </svg>
      }
      {
        state.avatar.shirt.style === 'collared' &&
        <svg 
        width="281" 
        height="93" 
        viewBox="0 0 281 93" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <ShirtTooltip> 
            <path 
            onClick={() => state.selected === 'shirt' ? setAttribute('selected', '') : setAttribute('selected', 'shirt')}
            d={pathMap.shirt.collared.shirt} 
            fill={colorMap[state.avatar.shirt.color as Color] || '#9287FF'} 
            stroke={state.selected === 'shirt' ? 'red' : 'black'} 
            strokeWidth={state.selected === 'shirt' ? '5' : '4'}
            />
          </ShirtTooltip>
          <ColorsTooltip attribute={'collar'}>
            <g onClick={() => state.selected === 'collar' ? setAttribute('selected', '') : setAttribute('selected', 'collar')}>
              <path d={pathMap.shirt.collared.collar[1]} 
              fill={colorMap[state.avatar.collar.color as Color] || '#9287FF'}  
              stroke="black" 
              strokeWidth="4"
              />
              <path d={pathMap.shirt.collared.collar[2]} 
              fill={colorMap[state.avatar.collar.color as Color] || '#9287FF'}  
              stroke="black" 
              strokeWidth="4"
              />
              <path d={pathMap.shirt.collared.collar[3]} 
              fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <path d={pathMap.shirt.collared.collar[4]} fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <path d={pathMap.shirt.collared.collar[5]} fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <path d={pathMap.shirt.collared.collar[6]} fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
            </g>
          </ColorsTooltip>
        </svg>
      }
    </div>
  )
}