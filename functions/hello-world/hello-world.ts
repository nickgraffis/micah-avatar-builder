// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import { Handler } from '@netlify/functions';
import sharp from 'sharp';
import { newAvatar } from '../../lib';
import { CreateAvatarInputOptions, MicahAvatar } from '../../lib/types';
import * as components from '../../lib/components';

const handler: Handler = async (event) => {
  try {
    const body = newAvatar({ size: 300 })
    console.log(body)
    return {
      statusCode: 200,
      headers: {
        "Content-Type": 'image/svg+xml',
      },
      body,
    } 
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: err.toString()
    }
  }
}

module.exports = { handler }
