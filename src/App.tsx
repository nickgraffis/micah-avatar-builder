import React, { FC, useRef } from 'react'
import useAvatarContext, { AvatarProvider } from './Hooks/useAvatar'
import { newAvatar } from '../lib'
type Props = { } 

export const App: FC<Props> = () => {
  let test = newAvatar({ size: 300})
  
  return (
    <AvatarProvider>
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center h-screen">
        <div onClick={(event) => console.log(event.target)} dangerouslySetInnerHTML={{ __html: test }} />
      </div>
    </AvatarProvider>
  )
}