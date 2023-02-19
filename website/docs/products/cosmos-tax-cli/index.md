---
id: about
title:  Cosmos Tax Cli.
sidebar_label: About
---

## What is the cosmos-tax-cli
The cosmos-tax-cli is an opensource cosmos tax tool that can be used to index any cosmos chain into a postgresql database.  In addition to indexing a chain, it can also search an indexed database for user activity and generate custom CSV reports that can be used with tax software.  

## Opensource & Funding

### Strangelove & Interchain Foundation
Parts of the cosmos-tax-cli were funded by the [Strangelove Crypto](https://strange.love/) via the [Interchain Foundation](https://interchain.io/).  Defiant started development on it on January 2022, and continues to actively develop it.  

| Round | From        | Dates             | Source Code                                                                 |
|-------|-------------|-------------------|-----------------------------------------------------------------------------|
| 1     | Strangelove | Jan,Feb,Jun 2022  | [v1.0.0](https://github.com/DefiantLabs/cosmos-tax-cli/releases/tag/v1.0.0) |
| 2     | Strangelove | Jul,Aug,Sep 2022  | [v1.3.0](https://github.com/DefiantLabs/cosmos-tax-cli/releases/tag/v1.3.0) |

### Osmosis
In addition to the ICF funding, we also recieved funding from the [Osmosis Grants Company](https://grants.osmosis.zone/grant-recipients) to add GAMM support to the cosmos-tax-cli.  

| Round | From                   | Dates             | Source Code                                                                 |
|-------|------------------------|-------------------|-----------------------------------------------------------------------------|
| 1     | Osmosis Grants Company | May 2022          | inprogress                                                                  |


By Default the cosmos-tax-cli only supports the base cosmos modules `authz, bank, denoms, distribution, gov, ibc, slashing, staking, tx`. By adding support for the GAMM module users are able to track Swaps, and LP activity on the osmosis dex.

## Quick Start
We have created a quickstart example of how to run the cosmos-tax-cli in docker-compose.