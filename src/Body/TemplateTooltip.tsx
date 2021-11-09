import Tippy from "@tippyjs/react/headless";
import React, { useState } from "react";
import { colorMap } from "../../lib/color-map";
import useAvatarContext from "../Hooks/useAvatar";
import { Avatar, Color } from "../types";

type Props = {
  anchor: JSX.Element,
  tabs: ('color' | 'style')[],
  attribute: keyof Avatar,
  children?: JSX.Element,
}

export const TemplateTooltip = ({ 
  anchor,
  tabs,
  attribute,
  children
}: Props) => {
  const { state, setAttribute } = useAvatarContext() || {}
  if (!state || !setAttribute) return null

  return (
    <Tippy
    interactive={true}
    appendTo={document.body}
    visible={state.selected === attribute}
    render={_ => (
      <div>
        <div 
        className="focus:outline-none absolute shadow-lg -bottom-36 rounded-2xl p-4 left-24 bg-gray-200 w-64 h-72" 
        tabIndex={-1}
        >
          <div className="space-y-4 w-full">
            {
              tabs.length > 1 &&
              <div className="flex p-1 space-x-1 bg-gray-300 rounded-xl z-50 cursor-pointer">
                <button onClick={() => setAttribute('tab', 'color')} className={`w-full py-1.5 text-sm leading-5 font-medium text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 ${ state.tab === 'color' ? 'bg-white shadow' : 'hover:bg-white hover:text-white'}`} role="tab" type="button" aria-selected="true">Color</button>
                <button onClick={() => setAttribute('tab', 'style')} className={`w-full py-1.5 text-sm leading-5 font-medium text-gray-800 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 ${ state.tab === 'style' ? 'bg-white shadow' : 'hover:bg-white hover:text-white'}`} role="tab" type="button" aria-selected="false">Style</button>
              </div>
            }
            { 
              (tabs.toString() == 'color' || (state.tab === 'color' && tabs.includes('color'))) &&
              <div 
              className="flex w-full flex-wrap justify-start" 
              >
                {
                  Object.keys(colorMap).map((color, index) => (
                    <div 
                    key={index}
                    onClick={ () => setAttribute(`avatar.${attribute}.color`, color as Color)}
                    className="w-8 h-8 m-2 rounded-full flex flex-shrink-0 cursor-pointer transform hover:scale-105 tranition-transform duration-150" 
                    style={{ backgroundColor: colorMap[color as Color] }}
                    >
                    </div>
                  )
                )}
              </div>
            }
            {
              (state.tab === 'style' && tabs.includes('style') && children) &&
              children
            }
          </div>
        </div>
        <div 
        className="absolute h-8 w-8 bg-gray-200 left-20 -bottom-16 transform rotate-45 rounded-lg"
        >
        </div>
      </div>
    )}
  >
    {anchor}
  </Tippy>
  )
}