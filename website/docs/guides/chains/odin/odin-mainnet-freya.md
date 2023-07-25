---

id: odin-mainnet-freya
title: odin-mainnet-freya
sidebar_label: 🔗 odin-mainnet-freya
---
# Chain Information

### 📚 Code
- **Docker**: [ghcr.io/defiantlabs/odind:v0.6.2](https://github.com/DefiantLabs/externalPackages/pkgs/container/odind/78019593?tag=v0.6.2)

- **Source**: [odin-protocol/odin-core](https://github.com/odin-protocol/odin-core)

```bash
# Clone the repository
git clone https://github.com/odin-protocol/odin-core.git

# Navigate into the directory
cd odin

# Switch to your desired version (Refer 'Binary Map' for versions)
git checkout <your_desired_version>

# Install the dependencies
make install

# Init
odind --home ~/.odind init defiantlabs

```

### 🌐 Binary Map 

Here's a table summarizing the binary versions used in odin-mainnet-freya. 🚀

| Block Range  📦                                                    | Version 📔 |
|------------------------------------------------------------|------------|
| [changeme](https://explore.defiantlabs.net/odin/block/1) ➡️ [changeme](https://explore.defiantlabs.net/odin/block/1)       | `coming soon` ➡️ [🔗](https://explore.defiantlabs.net/odin/block/1)   |


---

### 💾 Snapshots

Download snapshots from [Imperator](https://imperator.co/services/odin).  Place extracted snapshot in `~/.odind/data` before you start your node.

---

# 🚀 Node Configuration

Use either the [Manual Config](#-manual-config), or the [Script](#-script) below to configure your node.

### 📂 Manual Config

1️⃣ Download [genesis.json](https://raw.githubusercontent.com/odin-protocol/networks/master/mainnets/odin-mainnet-freya/genesis.json) to `~/.odind/config`.

2️⃣ Modify the `chain-id` in your `client.toml`

```text
odin-mainnet-freya
```

3️⃣ Update the `seeds` in your `config.toml`

```text
02e905f49e1b869f55ad010979931b542302a9e6@35.241.221.154:26656,1fbdc459f333221abd04eb82f6ca623a3648bba0@142.132.231.209:26656,33819de32373413fd9a42c434049789e0db87339@158.160.1.153:26656,e9d27ff02f1e5c4da192392b21a5eab634f11dc9@38.146.3.126:26656,605ca25bb09931e0dd9d0d57ccde9b0a2b1620f5@195.88.87.88:26656,3a7a67bbfcbd748724e4e1fbbfdbf2a82adc1b5c@159.69.171.164:26656,1277ee88d9a50399763b9f3c242825d1361f1d2a@161.35.214.69:26656,221f6cec10b2a1be4ad3bd4b2c95506bead5cb64@162.19.89.8:10356,430ff422835c1c5ce87c5b5aa84f260f0e11c881@141.95.65.73:16856,9d16b1ce74a34b869d69ad5fe34eaca614a36ecd@35.241.238.207:26656
```

4️⃣ Set `minimum-gas-prices` in `app.toml`

```text
0.0125loki
```

### 🔧 Script
```shell
#!/bin/bash

# Download genesis.json
GENESIS_URL="https://raw.githubusercontent.com/odin-protocol/networks/master/mainnets/odin-mainnet-freya/genesis.json"
curl -s "$GENESIS_URL" > ~/.odind/config/genesis.json

# Modify chain-id
sed -i 's/chain-id = ".*"/chain-id = "odin-mainnet-freya"/' ~/.odind/config/client.toml

# Modify seeds
SEEDS="02e905f49e1b869f55ad010979931b542302a9e6@35.241.221.154:26656,1fbdc459f333221abd04eb82f6ca623a3648bba0@142.132.231.209:26656,33819de32373413fd9a42c434049789e0db87339@158.160.1.153:26656,e9d27ff02f1e5c4da192392b21a5eab634f11dc9@38.146.3.126:26656,605ca25bb09931e0dd9d0d57ccde9b0a2b1620f5@195.88.87.88:26656,3a7a67bbfcbd748724e4e1fbbfdbf2a82adc1b5c@159.69.171.164:26656,1277ee88d9a50399763b9f3c242825d1361f1d2a@161.35.214.69:26656,221f6cec10b2a1be4ad3bd4b2c95506bead5cb64@162.19.89.8:10356,430ff422835c1c5ce87c5b5aa84f260f0e11c881@141.95.65.73:16856,9d16b1ce74a34b869d69ad5fe34eaca614a36ecd@35.241.238.207:26656"
sed -i "s/seeds = \".*\"/seeds = \"$SEEDS\"/" ~/.odind/config/config.toml

# Modify minimum-gas-prices
GAS="0.0125loki"
sed -i "s/seeds = \".*\"/seeds = \"$GAS\"/" ~/.odind/config/config.toml

```

---

## Links

### 🕵️ **Explorer**

🔗 [**https://explore.defiantlabs.net/odin**](https://explore.defiantlabs.net/odin)

### 🌐 **RPC** 

🔗 [**http://35.241.221.154**](http://35.241.221.154:26657)

### 💻 **API**

🔗 [**http://35.241.221.154**](http://35.241.221.154:1317)

### 🗂️ **Chain Registry**

🔗 [**https://github.com/cosmos/chain-registry/tree/master/odin**](https://github.com/cosmos/chain-registry/tree/master/odin)
