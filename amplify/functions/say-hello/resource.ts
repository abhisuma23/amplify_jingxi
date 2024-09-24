import { defineFunction } from '@aws-amplify/backend';
import 'dotenv/config';

export const sayHello = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'say-hello',
  
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts',
  environment: {
    ENV: process.env.ENV ?? 'default',
  }
});