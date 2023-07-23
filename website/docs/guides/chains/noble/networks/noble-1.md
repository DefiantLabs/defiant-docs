---
id: noble-1
title: noble-1
sidebar_label: 🔗 noble-1
---
## How to Participate  
Noble is a permissioned network. Unlike permissionless Proof of Stake chains, the only way of participating in the Noble mainnet is through a delegation of staking tokens by the Noble Maintenance Multisig (NMM). 

Noble is currently capped for participation and chose validators based on number of factors including 
- Running validator on Cosmos Hub 
- Geographic distribution of nodes 
- Community contributions (educational content, events/marketing presence, etc) 
- Infrastructure development (block explorers, wallets, core Cosmos stack development, testing, etc) 
- Significant ATOM stake (1%+ voting power)


## Chain Info

### 📚 Source Code

To clone the source code, switch to your desired version and follow the steps below:

```bash
# Clone the repository
git clone git@github.com:strangelove-ventures/noble.git

# Navigate into the directory
cd noble

# Switch to your desired version (Check 'Binary Map' for versions)
git checkout <your_desired_version>

# Install the dependencies
make install
```

Please replace `<your_desired_version>` with the version you've chosen from the [Binary Map](#-binary-map).

For example, if you wanted to checkout to version `v3.0.0`, the checkout command would be `git checkout v3.0.0`.

### 🌐 Binary Map 

Here's an overview of all the binary versions utilized on noble-1. 🚀

| Blocks  📦                                                    | Version 📔 |
|------------------------------------------------------------|------------|
| [1](https://www.mintscan.io/noble/blocks/1) ➡️ [119,000](https://www.mintscan.io/noble/blocks/119000)           | `v1.0.0` ➡️ [🔗](https://github.com/strangelove-ventures/noble/releases/tag/v1.0.0)   |
| [119,001](https://www.mintscan.io/noble/blocks/119001) ➡️ [1,296,000](https://www.mintscan.io/noble/blocks/1296000)       | `v2.0.0` ➡️ [🔗](https://github.com/strangelove-ventures/noble/releases/tag/v2.0.0)   |
| [1,296,001](https://www.mintscan.io/noble/blocks/1296001) ➡️ [Current](https://www.mintscan.io/noble/blocks)       | `v3.0.0` ➡️ [🔗](https://github.com/strangelove-ventures/noble/releases/tag/v3.0.0)   |

---
# 🚀 Setup Configuration

To configure your setup correctly, you will need to update the following files:

### 📂 Genesis

Grab the genesis file from the URL provided below:

🔗 [genesis.json](https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/testnet/noble-1/genesis.json)

### 📂 client.toml

Update the `chain-id` in your `client.toml` file as follows:

```toml
chain-id = "noble-1"
```

### 📂 config.toml

Update the `persistent_peers` in your `config.toml` file with the following peers:

```toml
persistent_peers = "38179b18853d6a8cb86b99881e02cf72f18b9d0f@34.127.46.223:26656,57546d799a1cdef74b9a174052821a6e93636dfc@34.145.87.4:26656,6b76ad22a73897e3c39c7d87b7d12a3b7d690bff@34.168.48.128:26656"
```

### 📂 app.toml

In your `app.toml` file, set the `minimum-gas-prices` to `"0.0uusdc"` as shown below:

```toml
minimum-gas-prices = "0.0uusdc"
```

Now, you are ready to roll! 🎉

---

## Links

### 🕵️ **Explorer**

🔗 [**https://explore.defiantlabs.net/noble**](https://explore.defiantlabs.net/noble)

### 🌐 **RPC** 

🔗 [**https://rpc.mainnet.noble.strange.love**](https://rpc.mainnet.noble.strange.love:443)

### 💻 **API**

🔗 [**https://api.mainnet.noble.strange.love**](https://api.mainnet.noble.strange.love:443)
