import {expect as expectCDK, matchTemplate, MatchStyle} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AwsCdkHello from '../lib/aws-cdk-hello-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AwsCdkHello.AwsCdkHelloStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
            "Resources": {
                "MyFirstCDKBucketC899BE56": {
                    "Type": "AWS::S3::Bucket",
                    "Properties": {
                        "VersioningConfiguration": {
                            "Status": "Enabled"
                        }
                    },
                    "UpdateReplacePolicy": "Delete",
                    "DeletionPolicy": "Delete"
                }
            }
        }
        , MatchStyle.EXACT))
});
