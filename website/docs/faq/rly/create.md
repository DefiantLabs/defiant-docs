---
id: create
title:  IBC.
sidebar_label: Create the Clients
---

Create a client.
Before rly can create a client, it needs a path defined. This can be done by doing

```
rly paths new sommelier-3 injective-1 mainnet-sommelier-injective
```

This will add this section to your config
```
paths:
    mainnet-sommelier-injective:
        src:
            chain-id: sommelier-3
        dst:
            chain-id: injective-1
        src-channel-filter:
            rule: ""
            channel-list: []
```

Now that you have a path defined, you can create the client.

## Create a new Client
You can get the default unbonding time by 
```
curl -s https://rpc.somm.bh.rocks:443/genesis \
| jq -r '.result.genesis.app_state.staking.params.unbonding_time'
```

The trusting period should be less than the unbonding time. For example, if you see this error when creating the client
```
InvalidArgument desc = trusting period (604h48m0s) should be < unbonding period (504h0m0s)
```
adjust your trusting period to something lower

```
rly tx client sommelier injective mainnet-sommelier-injective --client-tp 500h0m0s -d
```

A successfull client connection looks like this. this client_id

```
Client Created	\
{"src_chain_id": "sommelier-3", "src_client_id": "07-tendermint-4", "dst_chain_id": "injective-1"}
```
You just created the sommelier client, your config has been updated to
```
paths:
    mainnet-sommelier-injective:
        src:
            chain-id: sommelier-3
            client-id: 07-tendermint-4
        dst:
            chain-id: injective-1
        src-channel-filter:
            rule: ""
            channel-list: []
```

Next you need to create the injective client, then you will link them

```
rly tx client injective sommelier mainnet-sommelier-injective --client-tp 500h0m0s -d
```
`{"src_chain_id": "injective-1", "src_client_id": "07-tendermint-135", "dst_chain_id": "sommelier-3"}`

## Link
now you can link the path (2 clients) together.
```
rly tx link mainnet-sommelier-injective --client-tp 590s
```


## Get the client-id
You can verify this client-id exists on injective by doing
```
gaiad q ibc client states \
--node https://rpc.sommelier.strange.love:443 | \
jq -r '.client_states[].client_id'            
```
`07-tendermint-0`