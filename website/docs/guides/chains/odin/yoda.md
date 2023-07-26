---

id: yoda
title: yoda
sidebar_label: 👽 yoda
---
# aws-lambda-executor

# HOW IT WORKS  

### Click the button.  

[![Launch Stack](https://cdn.rawgit.com/buildkite/cloudformation-launch-stack-button-svg/master/launch-stack.svg)](https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=aws-lambda-executor&templateURL=https://defiantlabs-public.s3.amazonaws.com/odin/aws-lambda-executor.yaml)  
[View Source](https://defiantlabs-public.s3.amazonaws.com/odin/aws-lambda-executor.yaml)

### Copy the ApiEndpoint from cloudformation Outputs.

![image](https://user-images.githubusercontent.com/807940/221392235-0dd1a4d4-dfd0-45ed-be14-fe0cc17c03d0.png)

### Update Yoda config
```
address: false
broadcast-timeout: 5m
chain-id: odin-mainnet-freya
executor: "rest:https://_______.execute-api.us-east-1.amazonaws.com/v0/odin_oracle_executor?timeout=7s"
gas-prices: "0.0125loki"
log-level: info
max-report: "10"
max-try: "5"
node: http://changeme:26657
rpc-poll-interval: 1s
validator: "odinvaloperchangeme"
```