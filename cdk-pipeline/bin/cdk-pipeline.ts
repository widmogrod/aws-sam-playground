#!/usr/bin/env node

const CODECOMMIT_REPO_NAME = "pipeline";

import { App } from '@aws-cdk/core';
import { LambdaStack } from '../lib/lambda-stack';
import { CdkPipelineStack } from '../lib/cdk-pipeline-stack';

const app = new App();

const lambdaStack = new LambdaStack(app, 'LambdaStack');
new CdkPipelineStack(app, 'PipelineDeployingLambdaStack', {
  lambdaCode: lambdaStack.lambdaCode,
  repoName: CODECOMMIT_REPO_NAME
});

app.synth();
