---

id: osmosis-1
title: osmosis-1
sidebar_label: 🔗 osmosis-1
---
# Chain Information

### 📚 Source Code

If you wish to clone the source code and switch to a specific version, kindly follow these steps:

```bash
# Clone the repository
git clone https://github.com/osmosis-labs/osmosis.git

# Navigate into the directory
cd osmosis

# Switch to your desired version (Refer 'Binary Map' for versions)
git checkout <your_desired_version>

# Install the dependencies
make install
```

Please substitute `<your_desired_version>` with the version of your choice from the [Binary Map](#-binary-map).

For instance, if you'd like to switch to version `v3.0.0`, the checkout command would be `git checkout v3.0.0`.

### 🌐 Binary Map 

Here's a table summarizing the binary versions used in osmosis-1. 🚀

| Block Range  📦                                                    | Version 📔 |
|------------------------------------------------------------|------------|
| [changeme](https://www.mintscan.io/osmosis/blocks/1) ➡️ [changeme](https://www.mintscan.io/osmosis/blocks/1)       | `vTBD` ➡️ [🔗](https://en.wikipedia.org/wiki/HTTP_404)   |


---
# 🚀 Setup Configuration

For a successful setup, ensure you update the following files:

### 📂 Genesis

Acquire the genesis file from the URL given below:

🔗 [genesis.json](https://media.githubusercontent.com/media/osmosis-labs/networks/main/osmosis-1/genesis.json)

### 📂 client.toml

Modify the `chain-id` in your `client.toml` file to:

```toml
chain-id = "osmosis-1"
```

### 📂 config.toml

Update the `seeds` in your `config.toml` file with these peers:

```toml
seeds = "20e1000e88125698264454a884812746c2eb4807@seeds.lavenderfive.com:12556,3cc024d1c760c9cd96e6413abaf3b36a8bdca58e@seeds.goldenratiostaking.net:1630,4dac1272a42e6b9e3ae3766304e12f1cb09ecbf0@osmosis-seed.panthea.eu:40656,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:12556,ebc272824924ea1a27ea3183dd0b9ba713494f83@osmosis-mainnet-seed.autostake.com:26716,f515a8599b40f0e84dfad935ba414674ab11a668@osmosis.blockpane.com:26656"
```

### 📂 app.toml

In your `app.toml` file, set the `minimum-gas-prices` to `"0.0uusdc"` as shown below:

```toml
minimum-gas-prices = "0.0025uosmo"
```
---

## Links

### 🕵️ **Explorer**

🔗 [**https://explore.defiantlabs.net/osmosis**](https://explore.defiantlabs.net/osmosis)

### 🌐 **RPC** 

🔗 [**https://rpc.osmosis.strange.love/**](https://rpc.osmosis.strange.love/:443)

### 💻 **API**

🔗 [**https://api.osmosis.strange.love/**](https://api.osmosis.strange.love/:443)