import { Avatar } from './types'

type Props = {
  filePath: string,
  attribute: keyof Avatar
}

export const Transformer = async ({
  filePath
}: Props) => {
  const SVG = await fetch(`../avatars/${filePath}.svg`).then(res => res.text())
  console.log(SVG)
}