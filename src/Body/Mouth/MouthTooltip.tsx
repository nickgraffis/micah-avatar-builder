import React from "react";
import { colorMap } from "../../../lib/color-map";
import { selectableStyleProps } from "../../Components/selectableStyleProps";
import useAvatarContext from "../../Hooks/useAvatar";
import { Color } from "../../types";
import { TemplateTooltip } from "../TemplateTooltip";

type Props = {
  children: JSX.Element
}

export const MouthTooltip = ({
  children,
}: Props) => {
  const { state, setAttribute } = useAvatarContext() || {}
  if (!state || !setAttribute) return null
  return (
    <TemplateTooltip
      tabs={['color', 'style']}
      anchor={children}
      attribute="mouth"
    >
      <div 
      className="flex w-full flex-wrap justify-start" 
      >
        <svg 
        onClick={() => setAttribute('avatar.mouth.style', 'smile')} { ...selectableStyleProps({ width: 67, height: 64 })} viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 17.5C5 34.5 33.5 42.5 59.5 23" stroke={colorMap[state.avatar.mouth.color as Color] || 'black'} stroke-width="4"/>
        </svg>
      </div>
    </TemplateTooltip>
  )
}