import React, { FC, useRef } from 'react'
import { Base } from './Body/Base'
import { Ears } from './Body/Ears/Ears'
import { Eyes } from './Body/Eyes/Eyes'
import { Glasses } from './Body/Glasses/Glasses'
import { Hair } from './Body/Hair/Hair'
import { Mouth } from './Body/Mouth/Mouth'
import { Shirt } from './Body/Shirt/Shirt'
import useAvatarContext, { AvatarProvider } from './Hooks/useAvatar'
import { State, Avatar } from './types'
import { style } from '../lib2/src/core'
import { createAvatar } from '../lib2/src/lib2/core'
import { newAvatar } from '../lib'
type Props = { } 

export const App: FC<Props> = () => {
  let test = newAvatar({ size: 300 })
  
  return (
    <AvatarProvider>
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center h-screen">
        <div onClick={(event) => console.log(event.target)} dangerouslySetInnerHTML={{ __html: test }} />
      </div>
    </AvatarProvider>
  )
}