#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkStack } from '../lib/cdk-work-stack';

const app = new cdk.App();
new CdkWorkStack(app, 'CdkWorkStack');
