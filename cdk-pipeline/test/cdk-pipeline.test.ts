import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkPipeline from '../lib/cdk-pipeline-stack';
import * as lambda from '@aws-cdk/aws-lambda';

test('Empty Stack', () => {
    // const app = new cdk.App();
    // // WHEN
    // const stack = new CdkPipeline.CdkPipelineStack(app, 'MyTestStack', {
    //     lambdaCode: lambda.Code.fromCfnParameters(),
    //     repoName: "project-repo",
    // });
    // // THEN
    // expectCDK(stack).to(matchTemplate({
    //   "Resources": {}
    // }, MatchStyle.EXACT))
});
