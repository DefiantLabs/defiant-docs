---
id: noble-1
title: noble-1
sidebar_label: 🔗 noble-1
---
# Chain Information

### 📚 Code
- **Docker**: [ghcr.io/strangelove-ventures/heighliner/noble:v3.0.0](https://github.com/strangelove-ventures/heighliner/pkgs/container/heighliner%2Fnoble/106083877?tag=v3.0.0)

- **Source**: [strangelove-ventures/noble](https://github.com/strangelove-ventures/noble)

```bash
# Clone the repository
git clone https://github.com/strangelove-ventures/noble.git

# Navigate into the directory
cd noble

# Switch to your desired version (Refer 'Binary Map' for versions)
git checkout <your_desired_version>

# Install the dependencies
make install

# Init
nobled --home ~/.noble init defiantlabs

```

### 🌐 Binary Map 

Here's an overview of all the binary versions utilized on noble-1. 🚀

| Blocks  📦                                                    | Version 📔 |
|------------------------------------------------------------|------------|
| [1](https://www.mintscan.io/noble/blocks/1) ➡️ [119,000](https://www.mintscan.io/noble/blocks/119000)           | `v1.0.0` ➡️ [🔗](https://github.com/strangelove-ventures/noble/releases/tag/v1.0.0)   |
| [119,001](https://www.mintscan.io/noble/blocks/119001) ➡️ [1,296,000](https://www.mintscan.io/noble/blocks/1296000)       | `v2.0.0` ➡️ [🔗](https://github.com/strangelove-ventures/noble/releases/tag/v2.0.0)   |
| [1,296,001](https://www.mintscan.io/noble/blocks/1296001) ➡️ [Current](https://www.mintscan.io/noble/blocks)       | `v3.0.0` ➡️ [🔗](https://github.com/strangelove-ventures/noble/releases/tag/v3.0.0)   |

---

### 💾 Snapshots

Download snapshots from [polkachu](https://www.polkachu.com/tendermint_snapshots/noble).  Place extracted snapshot in `~/.nobled/data` before you start your node.

---

# 🚀 Node Configuration

Use either the [Manual Config](#-manual-config), or the [Script](#-script) below to configure your node.

### 📂 Manual Config

1️⃣ Download [genesis.json](https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/testnet/noble-1/genesis.json) to `~/.nobled/config`.

2️⃣ Modify the `chain-id` in your `client.toml`

```text
noble-1
```

3️⃣ Update the `seeds` in your `config.toml`

```text
seeds = "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:21556"
```

4️⃣ Set `minimum-gas-prices` in `app.toml`

```text
0.0uusdc
```

### 🔧 Script
```shell
#!/bin/bash

# Download genesis.json
GENESIS_URL="https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/testnet/noble-1/genesis.json"
curl -s "$GENESIS_URL" > ~/.nobled/config/genesis.json

# Modify chain-id
sed -i 's/chain-id = ".*"/chain-id = "noble-1"/' ~/.nobled/config/client.toml

# Modify seeds
SEEDS="ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:21556"
sed -i "s/seeds = \".*\"/seeds = \"$SEEDS\"/" ~/.nobled/config/config.toml

# Modify minimum-gas-prices
GAS="0.0uusdc"
sed -i "s/seeds = \".*\"/seeds = \"$GAS\"/" ~/.nobled/config/config.toml

```

---

## Links

### 🕵️ **Explorer**

🔗 [**https://explore.defiantlabs.net/noble**](https://explore.defiantlabs.net/noble)

### 🌐 **RPC** 

🔗 [**https://rpc.mainnet.noble.strange.love**](https://rpc.mainnet.noble.strange.love:443)

### 💻 **API**

🔗 [**https://api.mainnet.noble.strange.love**](https://api.mainnet.noble.strange.love:443)

### 🗂️ **Chain Registry**

🔗 [**https://github.com/cosmos/chain-registry/tree/master/noble**](https://github.com/cosmos/chain-registry/tree/master/noble:443)
