---

id: pruning
title: Pruning
sidebar_label: Pruning

---

# Pruning Configurations on Cosmos

During countless dialogues with POS validators and the maestros of chain development, we've gained a profound comprehension of pruning configurations within the realm of Cosmos. This literary piece strives to present a thorough manual to Cosmos node operators, illuminating the inner workings of pruning and exemplifying configurations they could adopt to prune or abstain from pruning their nodes.

## 📚 Pruning - A Grand Overview

Pruning in the vast Cosmos can transpire at two distinct echelons:

1️⃣ Cache Pruning
2️⃣ DB (on-disk) Pruning

Our enlightening discoveries are founded on our collaborative work with @osmosiszone and @akashnet_. Here, we extend our gratitude to @valardragon and @abozanich for their unwavering support. 

### IAVL Pruning: Cache Pruning 🌱

IAVL trees, shrouded in the cache, are regulated by pruning configurations residing in your `app.toml`. These configurations zone in exclusively on cache and abstain from affecting any data stowed away in the DB on the disk.

- If the `pruning="default"`, the node conserves 100,000 blocks in the IAVL tree (cache). For instance, 100,000 blocks on @osmosiszone encapsulates around 7.5 days of data, and 3 days for @BandProtocol.
- When `pruning = "everything"`, the node eliminates everything from the cache at an interval of 10 blocks.

Pruning intervals and the number of blocks to prune can be fine-tuned by setting `pruning = "custom"`. For example, `pruning-keep-recent = 1000` retains the most recent 1000 blocks and `pruning-interval = "7"` prunes every 7 blocks. Remember, the pruning interval needs to be a prime number. This allows you to manage the IAVL in the cache but bears no relation to the disk.

In our encounters, utilizing custom pruning and maintaining `pruning-interval = "7"` and `pruning-keep-recent = 100` has yielded optimum performance on @band, @regen, @osmosis, @Akash, and @cosmos.

### Disk Pruning 📀

Now, let's delve into the configurations that regulate pruning on the disk. The disk harbors three primary data files:

- `blockstore.db`: Preserves all block-level intel.
- `application.db`: Keeps all custom application data.
- `state.db`: Holds validator, consensus, and abci data. This is of prime importance for slashing and associated validation.

Chain operators are obliged to retain, at the bare minimum, data for the unbonding period in state.db to shield against diverse short-range onslaughts with no penalties for validators.

Three configurations determine what must be eliminated at the termination of each commit:
1️⃣ Current Commit Height
2️⃣ Max Age Block ascertained in genesis.json
3️⃣ Minimum Retain Height defined in app.toml

The chain will discard everything below the lesser value of (max age block defined in genesis.json, current commit height - minimum retain height defined in app.toml).

No validator can override configurations to delete data within the bonding period. Even though the aforementioned configurations facilitate logical or soft deletions, the actual physical deletions from the disk are propelled by DB Configuration and Compaction.
