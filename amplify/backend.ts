import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sayHello } from './functions/say-hello/resource';
import { aws_lambda } from 'aws-cdk-lib';
const backend= defineBackend({
  auth,
  data,
  sayHello,
});

const amplifyBackendName = backend.auth.resources.userPool.node.tryGetContext(
  "amplify-backend-name"
);

const sayHelloLambda = backend.sayHello.resources.lambda as aws_lambda.Function
sayHelloLambda.addEnvironment("ENV", amplifyBackendName);