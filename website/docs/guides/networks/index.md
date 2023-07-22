---
id: grand-1-rehearsal-1
title: grand-1-rehearsal-1
sidebar_label: grand-1-rehearsal-1
---

![Noble logo](https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png)

## Testnet Overview
Noble will be running testnet rehersals for migrating from a sovereign chain to a consumer chain. If you are a validator on the cosmoshub, please participate in these rehersals to ensure a smooth transition.

## Schedule

| Date                 | Description                                |
|----------------------|--------------------------------------------|
| 2023-07-28T15:00:00Z | Join `grand-1-rehearsal-1`  as a validator |

## Chain Info

### Binary
```
git clone git@github.com:strangelove-ventures/noble.git
cd noble
git checkout grand-1-rehearsal-1
make install
```

### Genesis
```
https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/testnet/grand-1-rehearsal-1/genesis.json
```

### client.toml
```toml
chain-id = "grand-1-rehearsal-1"
```

### config.toml
```toml
persistent_peers = "38179b18853d6a8cb86b99881e02cf72f18b9d0f@34.127.46.223:26656,57546d799a1cdef74b9a174052821a6e93636dfc@34.145.87.4:26656,6b76ad22a73897e3c39c7d87b7d12a3b7d690bff@34.168.48.128:26656"
```

### app.toml
```toml
minimum-gas-prices = "0.0uusdc"
```

## Endpoints
RPC: 
* [https://rpc.grand-1-rehearsal-1.noble.strange.love](https://rpc.grand-1-rehearsal-1.noble.strange.love:443)

API: 
* [https://api.grand-1-rehearsal-1.noble.strange.love](https://api.grand-1-rehearsal-1.noble.strange.love:443)  

Explorer: 
* [https://explore.strange.love/grand-1-rehearsal-1](https://explore.strange.love/grand-1-rehearsal-1)