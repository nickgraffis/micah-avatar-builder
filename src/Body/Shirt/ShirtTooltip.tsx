import React from "react";
import { colorMap } from "../../../lib/color-map";
import { selectableStyleProps } from "../../Components/selectableStyleProps";
import useAvatarContext from "../../Hooks/useAvatar";
import { Color } from "../../types";
import { TemplateTooltip } from "../TemplateTooltip";

type Props = {
  children: JSX.Element
}

export const ShirtTooltip = ({
  children,
}: Props) => {
  const { state, setAttribute } = useAvatarContext() || {}
  if (!state || !setAttribute) return null
  return (
    <TemplateTooltip
      tabs={['color', 'style']}
      anchor={children}
      attribute="shirt"
    >
      <div 
      className="flex w-full flex-wrap justify-start" 
      >
        <svg 
        onClick={() => setAttribute('avatar.shirt.style', 'crew')} 
        className="selectable-style" width={281 / 4} height={93 / 4} viewBox="0 0 281 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        d="M182.552 38.4488L182.692 38.4809L182.836 38.4927C228.961 42.2969 256.62 62.7848 276.694 90.9997H3.37453C19.6742 61.6579 42.8579 42.9816 80.4446 34.4117C96.4579 30.7606 115.113 28.9394 137 28.9395C146.456 28.9395 153.814 30.3819 160.796 32.2853C163.383 32.9904 165.983 33.7805 168.643 34.5887C173.045 35.9265 177.611 37.3141 182.552 38.4488Z" 
        fill={colorMap[state.avatar.shirt.color as Color] || '#9287FF'} 
        stroke="black" 
        strokeWidth="4"
        />
        <path 
        d="M68.9305 36.5805L78.0837 16.9838C78.3023 16.5157 78.8456 16.293 79.3326 16.4654C117.259 29.8904 151.762 28.945 183.736 20.0444C184.139 19.9324 184.569 20.0806 184.815 20.4178L198.747 39.4703C199.13 39.994 198.935 40.7324 198.331 40.9696C164.724 54.166 101.663 51.9229 69.4152 37.9037C68.9036 37.6813 68.6945 37.0859 68.9305 36.5805Z" 
        fill={colorMap[state.avatar.collar.color as Color] || '#9287FF'} 
        stroke="black" 
        strokeWidth="4"
        />
        </svg>
        <svg 
        className="selectable-style"
        onClick={() => setAttribute('avatar.shirt.style', 'collared')}
        width={281 / 4} height={93 / 4}
        viewBox="0 0 281 93" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <path 
          d="M142.771 67.5777C142.771 67.5779 142.771 67.5779 144 66L142.771 67.5779L144.493 68.9188L145.679 67.0874L145.679 67.087L145.681 67.0841L145.69 67.0697L145.731 67.0072C145.742 66.9904 145.755 66.971 145.769 66.9491C145.803 66.8975 145.847 66.8318 145.9 66.7529C146.05 66.5278 146.275 66.1947 146.57 65.7695C147.158 64.919 148.023 63.7016 149.118 62.2463C151.312 59.3316 154.416 55.482 158.071 51.7183C161.737 47.9446 165.898 44.3176 170.198 41.7935C174.514 39.2597 178.777 37.9491 182.733 38.4825C225.171 44.2046 256.402 63.002 276.674 91.0006H3.37453C19.6742 61.6588 42.8579 42.9825 80.4446 34.4127C82.0464 34.0474 84.2242 34.1581 86.9471 34.7915C89.6421 35.4183 92.7146 36.5194 96.0282 37.9759C102.655 40.8887 110.052 45.1363 117.004 49.5364C123.945 53.9299 130.39 58.4425 135.104 61.8597C137.459 63.5674 139.379 64.9995 140.709 66.0036C141.374 66.5056 141.891 66.9005 142.241 67.1693C142.416 67.3037 142.55 67.4065 142.639 67.4754L142.739 67.553L142.764 67.5722L142.77 67.5767L142.771 67.5777Z" 
          fill={colorMap[state.avatar.shirt.color as Color] || '#9287FF'} 
          stroke={'black'} 
          strokeWidth={'4'}
          />
          <path 
          d="M68.6127 37.0849L73.7794 17.8529C73.9886 17.0741 74.9962 16.854 75.5402 17.4493C90.4034 33.7135 109.16 33.0762 115.385 32.3297C116.23 32.2284 116.892 33.1531 116.495 33.906L103.338 58.859C103.136 59.2414 102.724 59.4518 102.3 59.3636C98.3518 58.5411 78.6774 53.7321 68.7286 37.8667C68.583 37.6345 68.5416 37.3496 68.6127 37.0849Z" 
          fill={colorMap[state.avatar.collar.color as Color] || '#9287FF'} 
          stroke="black" 
          strokeWidth="4"
          />
          <path 
          d="M199.195 36.9814L187.615 17.4989C187.222 16.8374 186.253 16.8483 185.834 17.4937C180.097 26.3296 170.202 30.4 166.742 31.6024C166.12 31.8187 165.835 32.5584 166.171 33.1254L179.673 55.9402C179.875 56.2806 180.255 56.4651 180.636 56.3568C182.771 55.749 190.096 52.6851 199.182 38.0212C199.378 37.706 199.385 37.3001 199.195 36.9814Z" 
          fill={colorMap[state.avatar.collar.color as Color] || '#9287FF'} 
          stroke="black" 
          strokeWidth="4"
          />
          <path d="M125.5 54.5L116.5 33L109.5 48L125.5 54.5Z" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M157 53.5L166 32L173 47L157 53.5Z" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M86.5 14L74.5 17L84.5 23.5L86.5 14Z" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M176 14L187 17L180 23.5L176 14Z" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
        </svg>
        <svg 
        onClick={() => setAttribute('avatar.shirt.style', 'open')}
        viewBox="0 0 281 93" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...selectableStyleProps({width: 281, height: 93})}
        >
          <path 
          d="M276.366 90.8628H3.45626C3.49074 90.7926 3.52546 90.7219 3.5604 90.6507C8.10518 81.395 16.4899 64.319 27.4025 49.0413C33.5961 40.3702 40.5303 32.3872 47.9416 26.7719C55.3538 21.1558 63.0614 18.0405 70.8916 18.7256C85.946 20.0429 99.3549 28.2854 112.817 36.5604C114.092 37.3444 115.368 38.1288 116.646 38.9076C131.131 47.7349 146.005 55.9312 162.365 52.3445C167.899 51.1311 171.629 48.5345 173.976 45.1797C176.29 41.8727 177.122 38.0292 177.266 34.5166C177.41 30.9989 176.871 27.6738 176.311 25.2562C176.049 24.1257 175.779 23.1785 175.564 22.4839C179.189 18.8351 183.027 16.71 186.989 15.7533C191.284 14.7164 195.876 15.0158 200.707 16.4448C210.437 19.3229 220.847 26.6969 231.007 36.1789C249.621 53.5516 266.7 77.3231 276.366 90.8628Z" 
          fill={colorMap[state.avatar.shirt.color as Color] || '#9287FF'} 
          stroke={'black'} 
          strokeWidth={'4.27431'}
          />
        </svg>
      </div>
    </TemplateTooltip>
  )
}