---

id: osmosis-1
title: osmosis-1
sidebar_label: 🔗 osmosis-1
---
# Chain Information

### 📚 Code
- **Docker**: [ghcr.io/defiantlabs/osmosisd:v16.1.0](https://github.com/DefiantLabs/externalPackages/pkgs/container/osmosisd/110595350?tag=v16.1.0)

- **Source**: [osmosis-labs/osmosis](https://github.com/osmosis-labs/osmosis)

```bash
# Clone the repository
git clone https://github.com/osmosis-labs/osmosis.git

# Navigate into the directory
cd osmosis

# Switch to your desired version (Refer 'Binary Map' for versions)
git checkout <your_desired_version>

# Install the dependencies
make install

# Init
osmosisd --home ~/.osmosisd init defiantlabs

```

### 🌐 Binary Map 

Here's a table summarizing the binary versions used in osmosis-1. 🚀

| Block Range  📦                                                    | Version 📔 |
|------------------------------------------------------------|------------|
| [1](https://www.mintscan.io/osmosis/blocks/1) ➡️ [1314500](https://www.mintscan.io/osmosis/blocks/1)       | `v3.1.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v3.1.0)   |
| [1314501](https://www.mintscan.io/osmosis/blocks/1314501) ➡️ [2383300](https://www.mintscan.io/osmosis/blocks/2383300)       | `v4.2.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v4.2.0)   |
| [2383301](https://www.mintscan.io/osmosis/blocks/2383301) ➡️ [3401000](https://www.mintscan.io/osmosis/blocks/3401000)       | `v6.4.1` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v6.4.1)   |
| [3401001](https://www.mintscan.io/osmosis/blocks/3401001) ➡️ [4707300](https://www.mintscan.io/osmosis/blocks/4707300)       | `v8.0.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v8.0.0)   |
| [4707301](https://www.mintscan.io/osmosis/blocks/4707301) ➡️ [5432450](https://www.mintscan.io/osmosis/blocks/5432450)       | `v10.0.1` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v10.0.1)   |
| [5432451](https://www.mintscan.io/osmosis/blocks/5432451) ➡️ [6246000](https://www.mintscan.io/osmosis/blocks/6246000)       | `v11.0.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v11.0.0)   |
| [6246001](https://www.mintscan.io/osmosis/blocks/6246001) ➡️ [7241500](https://www.mintscan.io/osmosis/blocks/7241500)       | `v12.3.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v12.3.0)   |
| [7241501](https://www.mintscan.io/osmosis/blocks/7241501) ➡️ [7937500](https://www.mintscan.io/osmosis/blocks/7937500)       | `v13.1.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v13.1.0)   |
| [7937501](https://www.mintscan.io/osmosis/blocks/7937501) ➡️ [8732500](https://www.mintscan.io/osmosis/blocks/8732500)       | `v14.0.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v14.0.0)   |
| [8732501](https://www.mintscan.io/osmosis/blocks/8732501) ➡️ [2383300](https://www.mintscan.io/osmosis/blocks/10517000)       | `v15.2.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v15.2.0)   |
| [10517001](https://www.mintscan.io/osmosis/blocks/8732501) ➡️ [current](https://www.mintscan.io/osmosis/blocks/current)       | `v16.1.0` ➡️ [🔗](https://github.com/osmosis-labs/osmosis/releases/tag/v16.1.0)   |

---

### 💾 Snapshots

Download snapshots from [polkachu](https://www.polkachu.com/tendermint_snapshots/osmosis).  Place extracted snapshot in `~/.osmosisd/data` before you start your node.

---

# 🚀 Node Configuration

Use either the [Manual Config](#-manual-config), or the [Script](#-script) below to configure your node.

### 📂 Manual Config

1️⃣ Download [genesis.json](https://media.githubusercontent.com/media/osmosis-labs/networks/main/osmosis-1/genesis.json) to `~/.osmosisd/config`.

2️⃣ Modify the `chain-id` in your `client.toml`

```text
osmosis-1
```

3️⃣ Update the `seeds` in your `config.toml`

```text
seeds = "20e1000e88125698264454a884812746c2eb4807@seeds.lavenderfive.com:12556,3cc024d1c760c9cd96e6413abaf3b36a8bdca58e@seeds.goldenratiostaking.net:1630,4dac1272a42e6b9e3ae3766304e12f1cb09ecbf0@osmosis-seed.panthea.eu:40656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:12556,ebc272824924ea1a27ea3183dd0b9ba713494f83@osmosis-mainnet-seed.autostake.com:26716,f515a8599b40f0e84dfad935ba414674ab11a668@osmosis.blockpane.com:26656"
```

4️⃣ Set `minimum-gas-prices` in `app.toml`

```text
0.0025uosmo
```

### 🔧 Script
```shell
#!/bin/bash

# Download genesis.json
GENESIS_URL="https://media.githubusercontent.com/media/osmosis-labs/networks/main/osmosis-1/genesis.json"
curl -s "$GENESIS_URL" > ~/.osmosisd/config/genesis.json

# Modify chain-id
sed -i 's/chain-id = ".*"/chain-id = "osmosis-1"/' ~/.osmosisd/config/client.toml

# Modify seeds
SEEDS="20e1000e88125698264454a884812746c2eb4807@seeds.lavenderfive.com:12556,3cc024d1c760c9cd96e6413abaf3b36a8bdca58e@seeds.goldenratiostaking.net:1630,4dac1272a42e6b9e3ae3766304e12f1cb09ecbf0@osmosis-seed.panthea.eu:40656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:12556,ebc272824924ea1a27ea3183dd0b9ba713494f83@osmosis-mainnet-seed.autostake.com:26716,f515a8599b40f0e84dfad935ba414674ab11a668@osmosis.blockpane.com:26656"
sed -i "s/seeds = \".*\"/seeds = \"$SEEDS\"/" ~/.osmosisd/config/config.toml

# Modify minimum-gas-prices
GAS="0.0025uosmo"
sed -i "s/seeds = \".*\"/seeds = \"$GAS\"/" ~/.osmosisd/config/config.toml

```

---

## Links

### 🕵️ **Explorer**

🔗 [**https://explore.defiantlabs.net/osmosis**](https://explore.defiantlabs.net/osmosis)

### 🌐 **RPC** 

🔗 [**https://rpc.osmosis.strange.love**](https://rpc.osmosis.strange.love/:443)

### 💻 **API**

🔗 [**https://api.osmosis.strange.love**](https://api.osmosis.strange.love/:443)

### 🗂️ **Chain Registry**

🔗 [**https://github.com/cosmos/chain-registry/tree/master/osmosis**](https://github.com/cosmos/chain-registry/tree/master/osmosis:443)
