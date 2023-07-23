---

id: kaiyo-1
title: Kaiyo-1
sidebar_label: 🔗 kaiyo-1
---
# Chain Information

### 📚 Source Code

If you wish to clone the source code and switch to a specific version, kindly follow these steps:

```bash
# Clone the repository
git clone https://github.com/Team-Kujira/core.git

# Navigate into the directory
cd kujira

# Switch to your desired version (Refer 'Binary Map' for versions)
git checkout <your_desired_version>

# Install the dependencies
make install
```

Please substitute `<your_desired_version>` with the version of your choice from the [Binary Map](#-binary-map).

For instance, if you'd like to switch to version `v3.0.0`, the checkout command would be `git checkout v3.0.0`.

### 🌐 Binary Map 

Here's a table summarizing the binary versions used in Kaiyo-1. 🚀

| Block Range  📦                                                    | Version 📔 |
|------------------------------------------------------------|------------|
| [1](https://finder.kujira.network/kaiyo-1/block/1) ➡️ [1,764,001](https://finder.kujira.network/kaiyo-1/block/1764001)           | `v0.4.0` ➡️ [🔗](changeme)   |
| [1,764,001](https://finder.kujira.network/kaiyo-1/block/1764001) ➡️ [3,495,000](https://finder.kujira.network/kaiyo-1/block/3495000)       | `v0.5.0` ➡️ [🔗](changeme)   |
| [3,495,001](https://finder.kujira.network/kaiyo-1/block/3495001) ➡️ [5,196,234](https://finder.kujira.network/kaiyo-1/block/5196234)       | `v0.6.0` ➡️ [🔗](changeme)   | 
| [5,196,235](https://finder.kujira.network/kaiyo-1/block/5196235) ➡️ [9,226,200](https://finder.kujira.network/kaiyo-1/block/9226200)       | `v0.7.0` ➡️ [🔗](changeme)   |
| [9,226,201](https://finder.kujira.network/kaiyo-1/block/9226201) ➡️ [current](https://finder.kujira.network/kaiyo-1/block/)       | `v0.8.7` ➡️ [🔗](changeme)   |

---
# 🚀 Setup Configuration

For a successful setup, ensure you update the following files:

### 📂 Genesis

Acquire the genesis file from the URL given below:

🔗 [genesis.json](https://raw.githubusercontent.com/Team-Kujira/networks/master/mainnet/kaiyo-1.json)

### 📂 client.toml

Modify the `chain-id` in your `client.toml` file to:

```toml
chain-id = "kaiyo-1"
```

### 📂 config.toml

Update the `seeds` in your `config.toml` file with these peers:

```toml
seeds = "ebc272824924ea1a27ea3183dd0b9ba713494f83@kujira.mainnet.seed.autostake.net:26796,ea9f295fe14768c35ff05870098fbd7bf860836d@seed.kujira.mintserve.org:31897,ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:11856,5a70fdcf1f51bb38920f655597ce5fc90b8b88b8@136.244.29.116:41656"
```

### 📂 app.toml

In your `app.toml` file, set the `minimum-gas-prices` to `"0.0uusdc"` as shown below:

```toml
minimum-gas-prices = "0.00119ukuji,0.00150factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk,0.00150ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F,0.000125ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2,0.00126ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23,0.00652ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07,617283951ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10,0.000288ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5,0.000125ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986,0.00137ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5,0.0488ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602,78492936ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2,964351ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
```

---

## Links

### 🕵️ **Explorer**

🔗 [**https://explore.defiantlabs.net/kujira**](https://explore.defiantlabs.net/kujira)

### 🌐 **RPC** 

🔗 [**https://kujira-rpc.nodes.defiantlabs.net**](https://kujira-rpc.nodes.defiantlabs.net:443)

### 💻 **API**

🔗 [**https://kujira-api.nodes.defiantlabs.net**](https://kujira-api.nodes.defiantlabs.net:443)