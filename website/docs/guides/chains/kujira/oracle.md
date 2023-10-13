---

id: oracle
title: oracle
sidebar_label: 💹 oracle

---

### 📚 Code
- **Docker**: [ghcr.io/defiantlabs/kujirad:v0.9.0](https://github.com/DefiantLabs/externalPackages/pkgs/container/kujirad)

- **Source**: [Team-Kujira/oracle-price-feeder](https://github.com/Team-Kujira/oracle-price-feeder)

- **Version**: [v0.7.2](https://github.com/Team-Kujira/oracle-price-feeder/releases/tag/v0.7.2)

```bash
# Clone the repository
git clone https://github.com/Team-Kujira/oracle-price-feeder.git

# Navigate into the directory
cd oracle-price-feeder

# Switch to your desired version (Refer 'Binary Map' for versions)
git checkout <your_desired_version>

# Install the dependencies
make install
```

## 🚀 Configuring the Oracle 

Update `config.toml`, and make sure to change the `history_db`, `fee_granter`, `address`, `validator`, `keyring`, and `endpoints` as needed.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: oracle-config
  namespace: validators
data:

  client.toml: |
    chain-id = "kaiyo-1"
    keyring-backend = "file"
    output = "json"
    node = "tcp://kujira-sentry-1:26657"
    broadcast-mode = "sync"

  config.toml: |

    gas_adjustment = 2.5
    gas_prices = "0.00125ukuji"
    enable_server = true
    enable_voter = true
    provider_timeout = "1800ms"
    history_db = "/db/feeder.db"

    [server]
    listen_addr = "0.0.0.0:7171"
    read_timeout = "30s"
    verbose_cors = true
    write_timeout = "30s"

    [account]
    fee_granter = "kujira1vkje22mayn72r0a7kna6agv0sqm6k94ry9k6dd"
    address = "kujira1rfwcxn23s8smxkuq82n6p0fvsgd0qkrxzs382n"
    chain_id = "kaiyo-1"
    validator = "kujiravaloper1dnmz4yzv73lr3lmauuaa0wpwn8zm8s20memec4"
    prefix = "kujira"

    [keyring]
    backend = "file"
    dir = "/home/defiant/.kujira"

    [rpc]
    grpc_endpoint = "kujira-sentry-1:9090"
    rpc_timeout = "5000ms"
    tmrpc_endpoint = "http://kujira-sentry-1:26657"

    [telemetry]
    enable_hostname = true
    enable_hostname_label = true
    enable_service_label = true
    enabled = true
    global_labels = [["chain_id", "kaiyo-1"]]
    service_name = "price-feeder"
    type = "prometheus"
    prometheus_retention = 120

    [[currency_pairs]]
    base = "AKT"
    quote = "USD"
    providers = ["crypto", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "AKT"
    quote = "USDT"
    providers = ["gate", "huobi", "kucoin"]

    [[currency_pairs]]
    base = "AMPKUJI"
    quote = "KUJI"
    providers = ["finv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "ARB"
    quote = "USD"
    providers = ["bitfinex", "coinbase", "crypto", "kraken"]

    [[currency_pairs]]
    base = "ARB"
    quote = "USDT"
    providers = ["bitget", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "ATOM"
    quote = "USD"
    providers = ["coinbase", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "ATOM"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "AVAX"
    quote = "USD"
    providers = ["bitfinex", "coinbase", "kraken"]

    [[currency_pairs]]
    base = "AVAX"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "BAND"
    quote = "USD"
    providers = ["bitfinex", "coinbase", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "BAND"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "hitbtc", "huobi", "kucoin", "okx", "phemex", "xt"]

    [[currency_pairs]]
    base = "BNB"
    quote = "USDT"
    providers = ["bitget", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "BTC"
    quote = "USD"
    providers = ["bitfinex", "coinbase"]

    [[currency_pairs]]
    base = "BTC"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "CRO"
    quote = "USD"
    providers = ["coinbase", "osmosis"]

    [[currency_pairs]]
    base = "CRO"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "kucoin", "lbank", "mexc", "okx", "xt"]

    [[currency_pairs]]
    base = "DOT"
    quote = "USD"
    providers = ["bitfinex", "coinbase", "crypto", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "DOT"
    quote = "USDT"
    providers = ["bitget", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "ETH"
    quote = "USD"
    providers = ["bitfinex", "coinbase", "crypto"]

    [[currency_pairs]]
    base = "ETH"
    quote = "USDT"
    providers = ["bitget", "gate", "hitbtc", "huobi", "kraken", "kucoin", "lbank", "mexc", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "FET"
    quote = "BTC"
    providers = ["hitbtc"]

    [[currency_pairs]]
    base = "FET"
    quote = "USD"
    providers = ["bitfinex", "coinbase", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "FET"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "huobi", "kucoin", "lbank", "mexc", "phemex"]

    [[currency_pairs]]
    base = "FTM"
    quote = "USD"
    providers = ["bitfinex", "kraken"]

    [[currency_pairs]]
    base = "FTM"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "xt"]

    [[currency_pairs]]
    base = "GLMR"
    quote = "USD"
    providers = ["kraken"]

    [[currency_pairs]]
    base = "GLMR"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "huobi", "kucoin", "lbank", "mexc", "okx", "xt"]

    [[currency_pairs]]
    base = "HNT"
    quote = "USDT"
    providers = ["bitget", "gate", "okx", "kucoin", "bitmart", "bybit"]

    [[currency_pairs]]
    base = "HNT"
    quote = "USD"
    providers = ["coinbase", "crypto"]

    [[currency_pairs]]
    base = "INJ"
    quote = "USD"
    providers = ["coinbase", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "INJ"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "phemex"]

    [[currency_pairs]]
    base = "JUNO"
    quote = "USD"
    providers = ["kraken", "osmosis"]

    [[currency_pairs]]
    base = "JUNO"
    quote = "USDT"
    providers = ["bitget", "mexc"]

    [[currency_pairs]]
    base = "KAVA"
    quote = "USD"
    providers = ["coinbase", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "KAVA"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "huobi", "kucoin", "lbank", "mexc", "xt"]

    [[currency_pairs]]
    base = "KUJI"
    quote = "USDT"
    providers = ["mexc"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "KUJI"
    quote = "USD"
    providers = ["osmosis"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "KUJI"
    quote = "USDC"
    providers = ["finv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "LUNA"
    quote = "USD"
    providers = ["bitfinex", "kraken"]

    [[currency_pairs]]
    base = "LINK"
    quote = "USD"
    providers = ["coinbase", "crypto", "kraken"]

    [[currency_pairs]]
    base = "LINK"
    quote = "USDT"
    providers = ["binanceus", "bitget", "gate", "huobi", "lbank", "okx", "phemex", "xt"]

    [[currency_pairs]]
    base = "LUNA"
    quote = "USDT"
    providers = ["bitget", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "xt"]

    [[currency_pairs]]
    base = "LUNC"
    quote = "USD"
    providers = ["crypto", "osmosis"]

    [[currency_pairs]]
    base = "LUNC"
    quote = "USDT"
    providers = ["bitget", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "xt"]

    [[currency_pairs]]
    base = "MATIC"
    quote = "USD"
    providers = ["bitfinex", "coinbase", "crypto", "kraken"]

    [[currency_pairs]]
    base = "MATIC"
    quote = "USDT"
    providers = ["bitget", "gate", "hitbtc", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "xt"]

    [[currency_pairs]]
    base = "MNTA"
    quote = "USDC"
    providers = ["finv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "NTRN"
    quote = "ATOM"
    providers = ["astroport_neutron"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "OSMO"
    quote = "USD"
    providers = ["crypto", "osmosis"]

    [[currency_pairs]]
    base = "OSMO"
    quote = "USDT"
    providers = ["bitget", "gate", "huobi", "kucoin", "lbank", "mexc"]

    [[currency_pairs]]
    base = "PAXG"
    quote = "USD"
    providers = ["kraken"]

    [[currency_pairs]]
    base = "PAXG"
    quote = "USDT"
    providers = ["bitget", "crypto", "kucoin", "lbank", "mexc", "phemex"]

    [[currency_pairs]]
    base = "RLB"
    quote = "WETH"
    providers = ["uniswapv3"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "SCRT"
    quote = "USD"
    providers = ["kraken", "osmosis"]

    [[currency_pairs]]
    base = "SCRT"
    quote = "USDT"
    providers = ["gate", "huobi", "kucoin", "lbank", "mexc"]

    [[currency_pairs]]
    base = "SOL"
    quote = "USDT"
    providers = ["binance", "huobi", "okx", "bybit", "xt", "gate", "bitget", "kucoin"]

    [[currency_pairs]]
    base = "SOL"
    quote = "USD"
    providers = ["coinbase", "kraken"]

    [[currency_pairs]]
    base = "SOMM"
    quote = "OSMO"
    providers = ["osmosisv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "SOMM"
    quote = "USD"
    providers = ["osmosis"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "STARS"
    quote = "OSMO"
    providers = ["osmosisv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "STARS"
    quote = "USD"
    providers = ["osmosis"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "STATOM"
    quote = "ATOM"
    providers = ["osmosisv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "STOSMO"
    quote = "OSMO"
    providers = ["osmosisv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "UNI"
    quote = "USD"
    providers = ["coinbase", "crypto", "kraken"]

    [[currency_pairs]]
    base = "UNI"
    quote = "USDT"
    providers = ["binanceus", "bitget", "gate", "huobi", "lbank", "okx", "phemex", "poloniex", "xt"]

    [[currency_pairs]]
    base = "USDC"
    quote = "USD"
    providers = ["kraken", "osmosis"]

    [[currency_pairs]]
    base = "USDC"
    quote = "USDT"
    providers = ["bitget", "gate", "huobi", "kucoin", "lbank", "mexc", "okx", "phemex", "xt"]

    [[currency_pairs]]
    base = "USDT"
    quote = "USD"
    providers = ["binanceus", "coinbase", "crypto", "gate", "kraken", "osmosis"]

    [[currency_pairs]]
    base = "USK"
    quote = "USDC"
    providers = ["finv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "WBTC"
    quote = "BTC"
    providers = ["coinbase", "kucoin", "okx"]

    [[currency_pairs]]
    base = "WBTC"
    quote = "USD"
    providers = ["osmosis"]

    [[currency_pairs]]
    base = "WBTC"
    quote = "USDT"
    providers = ["bitget", "crypto", "gate", "hitbtc", "mexc", "phemex", "poloniex"]

    [[currency_pairs]]
    base = "WETH"
    quote = "USDC"
    providers = ["uniswapv3"]

    [[currency_pairs]]
    base = "WINK"
    quote = "USK"
    providers = ["finv2"]
    derivative = "twap"
    derivative_period = "30m"

    [[currency_pairs]]
    base = "WSTETH"
    quote = "WETH"
    providers = ["uniswapv3"]
    derivative = "twap"
    derivative_period = "30m"

    [[deviation_thresholds]]
    base = "USDT"
    threshold = "2"

    [[deviation_thresholds]]
    base = "KUJI"
    threshold = "2"

    [[provider_min_overrides]]
    denoms = ["AMPKUJI"]
    providers = 1

    [[provider_min_overrides]]
    denoms = ["RLB"]
    providers = 1


    [[provider_min_overrides]]
    denoms = ["STARS", "SOMM"]
    providers = 1

    [[provider_min_overrides]]
    denoms = ["STATOM", "STOSMO", "MNTA", "WINK", "USK"]
    providers = 1

    [[provider_min_overrides]]
    denoms = ["KUJI"]
    providers = 2

    [[provider_min_overrides]]
    denoms = ["NTRN"]
    providers = 1

    [[provider_min_overrides]]
    denoms = ["WSTETH", "WETH"]
    providers = 1

    [[provider_endpoints]]
    name = "astroport_neutron"
    urls = [
      "https://rpc-kralum.neutron-1.neutron.org",
    ]

    [[provider_endpoints]]
    name = "osmosisv2"
    urls = [
      "https://api.osmosis.strange.love",
      "https://api-osmosis-ia.cosmosia.notional.ventures",
      "https://osmosis-lcd.quickapi.com"
    ]
    [[provider_endpoints]]
    name = "osmosis"
    urls = [
      "https://api.osmosis.zone",
      "https://api-osmosis.imperator.co"
    ]

    [[provider_endpoints]]
    name = "fin"
    urls = [
    "https://api-kujira.mintthemoon.xyz",
    "https://kaiyo-1.gigalixirapp.com"
    ]

    [[provider_endpoints]]
    name = "finv2"
    urls = [
      "https://kujira-api.nodes.defiantlabs.net"
    ]


    [contract_addresses.astroport_neutron]
    NTRNATOM = "neutron1e22zh5p8meddxjclevuhjmfj69jxfsa8uu3jvht72rv9d8lkhves6t8veq"

    [contract_addresses.finv2]
    KUJIUSDC = "kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867"
    MNTAUSDC = "kujira1ws9w7wl68prspv3rut3plv8249rm0ea0kk335swye3sl2slld4lqdmc0lv"
    WINKUSK = "kujira1qxtd87qus6uzvqs4jv9r0j9ccd4yla42s6qag7y8fp7hhv68nzas6hqxgw"
    USDCUSK = "kujira1rwx6w02alc4kaz7xpyg3rlxpjl4g63x5jq292mkxgg65zqpn5llq202vh5"
    AMPKUJIKUJI = "kujira1lse59wt7a5yksdd08mennt299katjkfzdhmh8hvck8ln08jktcmsxrnh8s"

    [contract_addresses.osmosisv2]
    SOMMOSMO = "627"
    STARSOSMO = "1096"

    [contract_addresses.uniswapv3]
    USDCWETH = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640"
    WSTETHWETH = "0x109830a1AAaD605BbF02a9dFA7B0B92EC2FB7dAa"
    RLBWETH = "0x510100d5143e011db24e2aa38abe85d73d5b2177"
