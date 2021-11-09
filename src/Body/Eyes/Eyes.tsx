import React from "react"
import { EyesTooltip } from "./EyesTooltip";
import { colorMap } from "../../Colors/color-map";
import useAvatarContext from "../../Hooks/useAvatar";
import { Color } from "../../types";
import { ColorsTooltip } from "../../Colors/ColorsTooltip";

export const Eyes = () => {
  const { state, setAttribute } = useAvatarContext() || {}
  if (!state || !setAttribute) return null
  return (
    <div 
    className={`absolute top-[36.68%] ml-3 z-30
    cursor-pointer`} 
    >
      {
        state.avatar.eyes.style === 'eyes' && 
          <EyesTooltip>
            <svg onClick={() => state.selected === 'eyes' ? setAttribute('selected', '') : setAttribute('selected', 'eyes')}
            width="96" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="16.5301" cy="29.4023" rx="9" ry="13.5" transform="rotate(-6.77646 16.5301 29.4023)" fill={colorMap[state.avatar.eyes.color as Color] || 'black'}/>
              <ellipse cx="80.5312" cy="19.4021" rx="9" ry="13.5" transform="rotate(-6.27568 80.5312 19.4021)" fill={colorMap[state.avatar.eyes.color as Color] || 'black'}/>
            </svg>
          </EyesTooltip>
      }
      {
        state.avatar.eyes.style === 'eyeshadow' && 
          <svg width="96" height="49" viewBox="0 0 96 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ColorsTooltip attribute="eyeshadow">
              <circle onClick={() => state.selected === 'eyeshadow' ? setAttribute('selected', '') : setAttribute('selected', 'eyeshadow')} cx="15.2398" cy="21.2394" r="12" transform="rotate(-6.27568 15.2398 21.2394)" fill={colorMap[state.avatar.eyeshadow.color as Color] || '#D2EFF3'}/>
            </ColorsTooltip>
            <EyesTooltip>            
              <ellipse onClick={() => state.selected === 'eyes' ? setAttribute('selected', '') : setAttribute('selected', 'eyes')} cx="16.5301" cy="30.4023" rx="9" ry="13.5" transform="rotate(-6.77646 16.5301 30.4023)" fill={colorMap[state.avatar.eyes.color as Color] || 'black'}/>
            </EyesTooltip>
            <circle onClick={() => state.selected === 'eyeshadow' ? setAttribute('selected', '') : setAttribute('selected', 'eyeshadow')} cx="79.0191" cy="12.6105" r="12" transform="rotate(-6.27568 79.0191 12.6105)" fill={colorMap[state.avatar.eyeshadow.color as Color] || '#D2EFF3'}/>
            <ellipse onClick={() => state.selected === 'eyes' ? setAttribute('selected', '') : setAttribute('selected', 'eyes')} cx="80.5312" cy="20.4021" rx="9" ry="13.5" transform="rotate(-6.27568 80.5312 20.4021)" fill={colorMap[state.avatar.eyes.color as Color] || 'black'}/>
          </svg>
      }
      {
        state.avatar.eyes.style === 'round' && 
          <EyesTooltip>
            <svg onClick={() => state.selected === 'eyes' ? setAttribute('selected', '') : setAttribute('selected', 'eyes')}
            width="96" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="16.1171" cy="28.9268" rx="9" ry="10" transform="rotate(-6.77646 16.1171 28.9268)" fill={colorMap[state.avatar.eyes.color as Color] || 'black'} />
              <ellipse cx="80.1486" cy="18.9231" rx="9" ry="10" transform="rotate(-6.27568 80.1486 18.9231)" fill={colorMap[state.avatar.eyes.color as Color] || 'black'} />
            </svg>
          </EyesTooltip>
      }
      {
        state.avatar.eyes.style === 'smiling' && 
          <EyesTooltip>
            <svg onClick={() => state.selected === 'eyes' ? setAttribute('selected', '') : setAttribute('selected', 'eyes')}
            width="96" height="48" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.28675 34.0729C5.40099 34.8857 6.43424 35.0669 7.00876 34.4806C9.47388 31.9648 13.2637 30.1163 17.663 29.5936C20.2577 29.2853 22.7544 29.4749 24.9787 30.0657C25.7326 30.2659 26.4737 29.6294 26.2105 28.8951C24.5451 24.2497 19.8447 21.1962 14.7356 21.8033C8.79442 22.5093 4.55046 27.8978 5.25642 33.839C5.26572 33.9172 5.27583 33.9952 5.28675 34.0729Z" fill={colorMap[state.avatar.eyes.color as Color] || '#171921'}/>
              <path fillRule="evenodd" clipRule="evenodd" d="M69.3848 24.0725C69.4976 24.8856 70.5308 25.0671 71.1062 24.4816C73.5487 21.9959 77.2977 20.1702 81.6484 19.6532C84.2128 19.3485 86.6804 19.5348 88.88 20.1167C89.6341 20.3162 90.3751 19.6795 90.1108 18.9456C88.456 14.3522 83.8041 11.3346 78.7482 11.9354C72.8624 12.6348 68.6579 17.9732 69.3573 23.8591C69.3658 23.9305 69.3749 24.0016 69.3848 24.0725Z" fill={colorMap[state.avatar.eyes.color as Color] || '#171921'}/>
            </svg>
          </EyesTooltip>
      }
    </div>
  )
}