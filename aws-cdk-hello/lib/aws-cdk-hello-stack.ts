import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as pipelines from '@aws-cdk/pipelines';

export class AwsCdkHelloStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new s3.Bucket(this, "MyFirstCDKBucket", {
                versioned: true,
                removalPolicy: cdk.RemovalPolicy.DESTROY,
            }
        )

        // new pipelines.DeployCdkStackAction({
        //
        // })

        // The code that defines your stack goes here
    }
}
