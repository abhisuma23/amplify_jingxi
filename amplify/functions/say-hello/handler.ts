import type { Handler } from 'aws-lambda';
import { env } from '$amplify/env/say-hello';

export const handler: Handler = async (event, context) => {
  // your function code goes here
  console.log(`ENV, ${env.ENV}`);
  return 'Hello, World!';
};