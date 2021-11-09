import React from "react";
import { colorMap } from "../../../lib/color-map";
import useAvatarContext from "../../Hooks/useAvatar";
import { Color } from "../../types";
import { TemplateTooltip } from "../TemplateTooltip";

type Props = {
  children: JSX.Element
}

export const GlassesTooltip = ({
  children,
}: Props) => {
  const { state, setAttribute } = useAvatarContext() || {}
  if (!state || !setAttribute) return null
  return (
    <TemplateTooltip
      tabs={['color', 'style']}
      anchor={children}
      attribute="glasses"
    >
      <div 
      className="flex w-full flex-wrap justify-start" 
      >
        <svg 
          className="selectable-style"
          onClick={() => setAttribute('avatar.glasses.style', 'round')} 
          width={152 / 4} height={65 / 4} viewBox="0 0 152 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="123.5" cy="28" r="26" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4"/>
          <circle cx="56.5" cy="37" r="26" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4"/>
          <path d="M98.5 35C98.5 32.8783 97.6571 30.8434 96.1569 29.3431C94.6566 27.8429 92.6217 27 90.5 27C88.3783 27 86.3434 27.8429 84.8431 29.3431C83.3429 30.8434 82.5 32.8783 82.5 35" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4"/>
          <path d="M31 39L1 44.5" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4"/>
        </svg>
        <svg className="selectable-style"
        onClick={() => setAttribute('avatar.glasses.style', 'square')} 
        width={160 / 4} height={74 / 4} viewBox="0 0 160 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.5 42.5L2 49.125" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4" strokeLinecap="round"/>
          <path d="M32.4878 25.9393C31.618 22.4804 33.9396 19.0308 37.4716 18.5345L76.1882 13.0932C79.4696 12.632 82.5036 14.9183 82.9648 18.1998L88.5317 57.8105C88.9929 61.0919 86.7066 64.126 83.4252 64.5871L48.9526 69.4319C45.9161 69.8587 43.0465 67.9273 42.2987 64.9536L32.4878 25.9393Z" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4"/>
          <path d="M154.751 8.96388C154.634 5.39915 151.451 2.7232 147.919 3.21958L109.203 8.66085C105.921 9.12202 103.635 12.156 104.096 15.4375L109.663 55.0482C110.124 58.3297 113.158 60.616 116.44 60.1548L150.912 55.31C153.949 54.8832 156.175 52.2357 156.074 49.1711L154.751 8.96388Z" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4"/>
          <path d="M85.5 37.125L107.5 33.625" stroke={colorMap[state.avatar.glasses.color as Color] || 'black'} strokeWidth="4"/>
        </svg>
      </div>
    </TemplateTooltip>
  )
}