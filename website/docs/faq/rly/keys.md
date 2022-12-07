---
id: keys
title:  IBC.
sidebar_label: Create Keys
---

Create a client.

## Run the relay
run this in docker

```
docker run -it --entrypoint /bin/sh  ghcr.io/cosmos/relayer:v2.1.2
```

## Use rly to add the chain details to the default config
Note: The `relay chains add` command pulls data from the [chain registry](https://github.com/cosmos/chain-registry/), but not all chains exists in their.  If this command fails, you can manually modify `.relayer/config/config.yaml` to plug in the chain info. (see below)


run this in docker
```shell
rly config init
rly chains add sommelier
rly chains add injective
```
If the data exists in the chain registry, it will looks something like this.

`cat .relayer/config/config.yaml`

```
global:
    api-listen-addr: :5183
    timeout: 10s
    memo: ""
    light-cache-size: 20
chains:
    injective:
        type: cosmos
        value:
            key: default
            chain-id: injective-1
            rpc-addr: https://injective-rpc.polkachu.com:443
            account-prefix: inj
            keyring-backend: test
            gas-adjustment: 1.2
            gas-prices: 0.01inj
            min-gas-amount: 0
            debug: false
            timeout: 20s
            output-format: json
            sign-mode: direct
    sommelier:
        type: cosmos
        value:
            key: default
            chain-id: sommelier-3
            rpc-addr: https://rpc.somm.bh.rocks:443/
            account-prefix: somm
            keyring-backend: test
            gas-adjustment: 1.2
            gas-prices: 0.01usomm
            min-gas-amount: 0
            debug: false
            timeout: 20s
            output-format: json
            sign-mode: direct
```

## Use rly to import your wallets
a wallet is required to operate a relay

```
rly keys restore sommelier default "mnemonic"
rly keys restore injective default "mnemonic"
```

## Fund the Accounts
unless the RPC server you use has a `minimum-gas-price` of `0`, you need to fund both sides of the path.  This can be done by using a faucet, or asking the chain devs to send you some gas, or swapping for it on osmosis and self funding. You can verify the funds by doing.

Run this docker image
```
docker run -it --entrypoint /bin/sh  ghcr.io/strangelove-ventures/heighliner/sommelier:v4.0.2
```

Run this in docker
```
export SOMMELIER_ACCOUNT=somm1234.....
sommelier q bank balances $SOMMELIER_ACCOUNT --node https://rpc.sommelier.strange.love:443 --output json
```
