---
id: cosmovisor
title: cosmovisor
sidebar_label: Cosmovisor
---
# Configuring Cosmovisor

## Installing Cosmovisor

### Use 'go install' Method

You can get the latest version of Cosmovisor by executing this command:

```bash
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
```

or a previous version by executing this command:
  
```bash 
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@v1.5.0
```

### Building Manually

Alternatively, Cosmovisor can be installed from the source code. Clone the cosmos-sdk repository, navigate to the required version and build the tool using these commands:

```bash
git clone https://github.com/cosmos/cosmos-sdk.git
cd cosmos-sdk
git checkout cosmovisor/v1.5.0
make cosmovisor
```

After successful compilation, Cosmovisor will be available in the `/cosmovisor` directory. You might want to copy it into your system's PATH as shown:

```bash
cp cosmovisor/cosmovisor ~/go/bin/cosmovisor
```

To validate your CosmoVisor version, run:

```bash
cosmovisor version
```

## Directory Structure

```
.
├── current -> genesis or upgrades/<name>
├── genesis
│   └── bin
│       └── $DAEMON_NAME
└── upgrades
    └── <name>
        ├── bin
        │   └── $DAEMON_NAME
        └── upgrade-info.json
```

## Initializing Cosmovisor

You'll need to rename your binary to `osmosisd`:

```bash
mv osmosisd.<version>-<platform> osmosisd
```

Next, define the following environment variables:

```bash
export DAEMON_NAME=osmosisd
export DAEMON_HOME=~/.osmosis
```

You can set up the directory structure using:

```bash
cosmovisor init <path to executable>
```

Remember to point `DAEMON_HOME` to the home directory of the validator because CosmoVisor references `/data/` for upgrade information. `DAEMON_NAME` should be `osmosisd`.

## Running Cosmovisor

Cosmovisor serves as a lean interface around Cosmos applications. Here's how to initiate a testnet validator with Cosmovisor:

```bash
cosmovisor run start --log-level info
```

### Auto-Download

Generally, `cosmovisor` requires that the system administrator place all relevant binaries on disk before the upgrade happens. However, for people who don't need such control and want an automated setup (maybe they are syncing a non-validating fullnode and want to do little maintenance), there is another option.

**NOTE: we don't recommend using auto-download** because it doesn't verify in advance if a binary is available. If there will be any issue with downloading a binary, the cosmovisor will stop and won't restart an App (which could lead to a chain halt).

If `DAEMON_ALLOW_DOWNLOAD_BINARIES` is set to `true`, and no local binary can be found when an upgrade is triggered, `cosmovisor` will attempt to download and install the binary itself based on the instructions in the `info` attribute in the `data/upgrade-info.json` file. The files is constructed by the x/upgrade module and contains data from the upgrade `Plan` object. The `Plan` has an info field that is expected to have one of the following two valid formats to specify a download:

1. Store an os/architecture -> binary URI map in the upgrade plan info field as JSON under the `"binaries"` key. For example:

    ```json
    {
      "binaries": {
        "linux/amd64":"https://github.com/strangelove-ventures/osmosis/releases/download/v4.0.0-alpha1/osmosisd_linux-amd64?checksum=sha256:1155511b2ecc9310df4c5c3f0fa8df98b79f5ef5d82d8a38f137b9915b97a35e"
      }
    }
    ```

    You can include multiple binaries at once to ensure more than one environment will receive the correct binaries:

    ```json
    {
      "binaries": {
        "linux/amd64":"https://github.com/strangelove-ventures/osmosis/releases/download/v4.0.0-alpha1/osmosisd_linux-amd64?checksum=sha256:1155511b2ecc9310df4c5c3f0fa8df98b79f5ef5d82d8a38f137b9915b97a35e",
        "linux/arm64":"https://github.com/strangelove-ventures/osmosis/releases/download/v4.0.0-alpha1/osmosisd_linux-arm64?checksum=sha256:9bfb3bc9490d5ea2470b029b09b19ac44d6ad3ba85f000413b0244e9848acece"
        }
    }
    ```

    When submitting this as a proposal ensure there are no spaces. An example command using `osmosisd` could look like:

    ```shell
    > osmosisd tx upgrade software-upgrade \
    'argon' \
    --upgrade-height 2142000 \
    --upgrade-info '{"binaries":{"linux/amd64":"https://github.com/strangelove-ventures/osmosis/releases/download/v4.0.0-alpha1/osmosisd_linux-amd64?checksum=sha256:1155511b2ecc9310df4c5c3f0fa8df98b79f5ef5d82d8a38f137b9915b97a35e","linux/arm64":"https://github.com/strangelove-ventures/osmosis/releases/download/v4.0.0-alpha1/osmosisd_linux-arm64?checksum=sha256:9bfb3bc9490d5ea2470b029b09b19ac44d6ad3ba85f000413b0244e9848acece"},"urls":{"docs":"https://github.com/strangelove-ventures/osmosis-networks/blob/main/testnet/grand-1/chain-upgrades/v4.0.0-alpha1/README.md"}}' \
    --from osmosis10uu75g7zl0gnzt0wz46htgqnl5ml27dnthcztx
    ```

2. Store a link to a file that contains all information in the above format (e.g. if you want to specify lots of binaries, changelog info, etc. without filling up the blockchain). For example:

    ```text
    https://example.com/testnet-1001-info.json?checksum=sha256:deaaa99fda9407c4dbe1d04bd49bab0cc3c1dd76fa392cd55a9425be074af01e
    ```

When `cosmovisor` is triggered to download the new binary, `cosmovisor` will parse the `"binaries"` field, download the new binary with [go-getter](https://github.com/hashicorp/go-getter), and unpack the new binary in the `upgrades/<name>` folder so that it can be run as if it was installed manually.

Note that for this mechanism to provide strong security guarantees, all URLs should include a SHA 256/512 checksum. This ensures that no false binary is run, even if someone hacks the server or hijacks the DNS. `go-getter` will always ensure the downloaded file matches the checksum if it is provided. `go-getter` will also handle unpacking archives into directories (in this case the download link should point to a `zip` file of all data in the `bin` directory).

To properly create a sha256 checksum on linux, you can use the `sha256sum` utility. For example:

```shell
sha256sum ./testdata/repo/zip_directory/autod.zip
```

The result will look something like the following: `29139e1381b8177aec909fab9a75d11381cab5adf7d3af0c05ff1c9c117743a7`.

You can also use `sha512sum` if you would prefer to use longer hashes, or `md5sum` if you would prefer to use broken hashes. Whichever you choose, make sure to set the hash algorithm properly in the checksum argument to the URL.