// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import { newAvatar } from '../../lib';
import { colorMap } from '../../lib/color-map';

const isEmpty = (object:any) => { for (var _ in object) { return false; } return true; }

const handler: Handler = async (event) => {
  const params = event.queryStringParameters;
  // Check for valid colors
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
    ...(params?.glasses || params?.glassesColor) && {
      glasses: {
        ...(params?.glasses) && { style: params?.glasses },
        ...(params?.glassesColor) && { color: params?.glassesColor },
      }
    },
    ...(params?.facialHair || params?.facialHairColor) && {
      facialHair: {
        ...(params?.facialHair) && { style: params?.facialHair },
        ...(params?.facialHairColor) && { color: params?.facialHairColor },
      }
    },
    ...(params?.nose || params?.nose) && {
      nose: {
          style: params?.nose
      }
    },
    ...(params?.base) && {
      base: {
        color: params?.base
      }
    },
    ...(params?.eyebrows || params?.eyebrowsColor) && {
      eyebrows: {
        ...(params?.eyebrows) && { style: params?.eyebrows },
        ...(params?.eyebrowsColor) && { color: params?.eyebrowsColor },
      }
    },
    ...(params?.eyes || params?.eyesColor) && {
      eyes: {
        ...(params?.eyes) && { style: params?.eyes },
        ...(params?.eyesColor) && { color: params?.eyesColor },
      }
    },
    ...(params?.hair || params?.hairColor) && {
      hair: {
        ...(params?.hair) && { style: params?.hair },
        ...(params?.hairColor) && { color: params?.hairColor },
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
