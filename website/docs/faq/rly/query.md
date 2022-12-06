---
id: query
title:  IBC.
sidebar_label: Query
---

By querying a chain for it's IBC information, you can determine if you need to create a new path, or use an existing one.

## Check for Clients

Point any cosmos binary to a chains RPC server.  In this example we list all the sommelier states and return the chain-ids.  The output shows that only osmosis-1 exists.
```
gaiad q ibc client states \
--node https://rpc.sommelier.strange.love:443 | \
jq -r '.client_states[].client_state.chain_id'
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