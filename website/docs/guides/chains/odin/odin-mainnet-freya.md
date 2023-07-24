---

id: odin-mainnet-freya
title: odin-mainnet-freya
sidebar_label: 🔗 odin-mainnet-freya
---
# Chain Information

### 📚 Source Code

If you wish to clone the source code and switch to a specific version, kindly follow these steps:

```bash
# Clone the repository
git clone https://github.com/odinprotocol/odin.git

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

Here's a table summarizing the binary versions used in odin-mainnet-freya. 🚀

| Block Range  📦                                                    | Version 📔 |
|------------------------------------------------------------|------------|
| [changeme](https://explore.defiantlabs.net/odin/block/1) ➡️ [changeme](https://explore.defiantlabs.net/odin/block/1)       | `coming soon` ➡️ [🔗](https://explore.defiantlabs.net/odin/block/1)   |


---
# 🚀 Setup Configuration

For a successful setup, ensure you update the following files:

### 📂 Genesis

Acquire the genesis file from the URL given below:

🔗 [genesis.json](https://raw.githubusercontent.com/ODIN-PROTOCOL/networks/master/mainnets/odin-mainnet-freya/genesis.json)

### 📂 client.toml

Modify the `chain-id` in your `client.toml` file to:

```toml
chain-id = "odin-mainnet-freya"
```

### 📂 config.toml

Update the `seeds` in your `config.toml` file with these peers:

```toml
seeds = "02e905f49e1b869f55ad010979931b542302a9e6@35.241.221.154:26656,1fbdc459f333221abd04eb82f6ca623a3648bba0@142.132.231.209:26656,33819de32373413fd9a42c434049789e0db87339@158.160.1.153:26656,e9d27ff02f1e5c4da192392b21a5eab634f11dc9@38.146.3.126:26656,605ca25bb09931e0dd9d0d57ccde9b0a2b1620f5@195.88.87.88:26656,3a7a67bbfcbd748724e4e1fbbfdbf2a82adc1b5c@159.69.171.164:26656,1277ee88d9a50399763b9f3c242825d1361f1d2a@161.35.214.69:26656,221f6cec10b2a1be4ad3bd4b2c95506bead5cb64@162.19.89.8:10356,430ff422835c1c5ce87c5b5aa84f260f0e11c881@141.95.65.73:16856,9d16b1ce74a34b869d69ad5fe34eaca614a36ecd@35.241.238.207:26656"
```

### 📂 app.toml

In your `app.toml` file, set the `minimum-gas-prices` to `"0.0125loki"` as shown below:

```toml
minimum-gas-prices = "0.0125loki"
```
---

## Links

### 🕵️ **Explorer**

🔗 [**https://explore.defiantlabs.net/odin**](https://explore.defiantlabs.net/odin)

### 🌐 **RPC** 

🔗 [**http://35.241.221.154**](http://35.241.221.154:26657)

### 💻 **API**

🔗 [**http://35.241.221.154**](http://35.241.221.154:1317)