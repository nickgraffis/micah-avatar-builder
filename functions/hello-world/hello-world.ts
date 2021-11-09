// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import sharp from 'sharp';
import { newAvatar } from '../../lib';
import { CreateAvatarInputOptions, MicahAvatar } from '../../lib/types';
import * as components from '../../lib/components';
import { colorMap } from '../../lib/color-map';

const isEmpty = (object:any) => { for (var _ in object) { return false; } return true; }

const handler: Handler = async (event) => {
  const params = event.queryStringParameters;
  const colorParams = params && Object.keys(params).filter(key => key.includes('Color'))
  if (colorParams) {
    for (let i = 0; i < colorParams.length; i++) {
      let key = colorParams[i];
      //@ts-ignore
      if(!Object.keys(colorMap).includes(params?.[key])) return {
        statusCode: 400,
        body: JSON.stringify({
          error: `${params?.[key]} is not a valid color.`,
          helper: `Valid colors are ${Object.keys(colorMap).join(', ')}`
        })
      }
    }
  }

  const avatar: any = {
    ...(params?.shirt || params?.shirtColor) && {
      shirt: {
        ...(params?.shirt) && { style: params?.shirt },
        ...(params?.shirtColor) && { color: params?.shirtColor },
      }
    },
    ...(params?.collarColor) && {
      collar: {
        color: params?.collarColor,
      }
    },
    ...(params?.shirt || params?.shirtColor) && {
      shirt: {
        ...(params?.shirt) && { style: params?.shirt },
        ...(params?.shirtColor) && { color: params?.shirtColor },
      }
    },
  }

  const body = newAvatar({
    ...(params?.size) && { size: params?.size },
    ...(params?.seed) && { seed: params?.seed },
    ...(params?.facialHairProbability) && { facialHairProbability: parseInt(params?.facialHairProbability) },
    ...(params?.glassesProbability) && { glassesProbability: parseInt(params?.glassesProbability) },
    ...(params?.earringsProbability) && { earringsProbability: parseInt(params?.earringsProbability) },
    ...(!isEmpty(avatar)) && { avatar }
  })

  return {
    statusCode: 200,
    headers: {
      "Content-Type": 'image/svg+xml',
    },
    body,
  } 
}

module.exports = { handler }
