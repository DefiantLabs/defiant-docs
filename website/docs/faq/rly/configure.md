---
id: configure
title:  IBC.
sidebar_label: Configure Relay
---

## Use rly to create the path
Use the chain-id from the chain registry.
Use the chain name to construct the path-name.  its ok to give it a prefix.
Syntax: 
`rly paths new chain-id chain-id path-name`

```
rly paths new sommelier-3 injective-1 mainnet-sommelier-injective
```

`osmosis-1`

## Get the client-id
The client-id is required to set up a relay on an existing path.
```
gaiad q ibc client states \
--node https://rpc.sommelier.strange.love:443 | \
jq -r '.client_states[].client_id'            
```
`07-tendermint-0`