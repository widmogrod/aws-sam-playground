#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkHelloStack } from '../lib/aws-cdk-hello-stack';

const app = new cdk.App();
new AwsCdkHelloStack(app, 'AwsCdkHelloStack');
