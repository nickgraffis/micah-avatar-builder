// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import sharp from 'sharp';
import { newAvatar } from '../../lib';
import { CreateAvatarInputOptions, MicahAvatar } from '../../lib/types';

const handler: Handler = async (event) => {
  const options: CreateAvatarInputOptions<MicahAvatar> = { 

  }
  
  return {
    statusCode: 200,
    headers: {
      "Content-Type": 'image/svg+xml',
    },
    body: newAvatar({}),
  } 
}

module.exports = { handler }
