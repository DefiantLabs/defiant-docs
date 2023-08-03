# Private Repos

## The Problem
unlike a `user` deploy key, a `repo` deploy key can only be used in a sigle repo, not multiple.  In order to build projects that use multiple private repos on github, the use of SSH alias are required.  See [managing-deploy-keys](https://docs.github.com/en/developers/overview/managing-deploy-keys#using-multiple-repositories-on-one-server)

## 1.) Create a deploy key for each private repo.

### Generate keys in ~/.ssh/
```
cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C "osmosis-cosmos-sdk@defiantlabs.net" -q -N "" -f osmosis-cosmos-sdk.id_rsa
ssh-keygen -t rsa -b 4096 -C "osmosis@defiantlabs.net" -q -N "" -f osmosis.id_rsa
ssh-keygen -t rsa -b 4096 -C "tendermint@defiantlabs.net" -q -N "" -f tendermint.id_rsa
ssh-keygen -t rsa -b 4096 -C "OsmosisArbitrageBot@defiantlabs.net" -q -N "" -f OsmosisArbitrageBot.id_rsa
```
### Add deploy key to github repos.

For each private repo, add the deploy keys public keypair.  

![Deploy Key](deploy_key.png)

## 2.) Create SSH Aliases for all github private repos.
`~/.ssh/config`
```
Host github.com-osmosis-cosmos-sdk
  HostName github.com
  User git
  IdentityFile /home/ubuntu/.ssh/osmosis-cosmos-sdk.id_rsa

Host github.com-osmosis
  HostName github.com
  User git
  IdentityFile /home/ubuntu/.ssh/osmosis.id_rsa

Host github.com-tendermint
  HostName github.com
  User git
  IdentityFile /home/ubuntu/.ssh/tendermint.id_rsa

Host github.com-OsmosisArbitrageBot
  HostName github.com
  User git
  IdentityFile /home/ubuntu/.ssh/OsmosisArbitrageBot.id_rsa
```

## 3.) Configure URL re-writes to use SSH Aliases
`~/.gitconfig`
```
[url "git@github.com-osmosis-cosmos-sdk:DefiantLabs/osmosis-cosmos-sdk"]
        insteadOf = https://github.com/DefiantLabs/osmosis-cosmos-sdk

[url "git@github.com-osmosis:DefiantLabs/osmosis"]
        insteadOf = https://github.com/DefiantLabs/osmosis

[url "git@github.com-tendermint:DefiantLabs/tendermint"]
        insteadOf = https://github.com/DefiantLabs/tendermint

[url "git@github.com-OsmosisArbitrageBot:DefiantLabs/OsmosisArbitrageBot"]
        insteadOf = https://github.com/DefiantLabs/OsmosisArbitrageBot
```

## Test
you should now be able to clone a private repo using it's public address.

```
$ git clone https://github.com/DefiantLabs/osmosis-cosmos-sdk/
Cloning into 'osmosis-cosmos-sdk'...
remote: Enumerating objects: 105433, done.
remote: Counting objects: 100% (99/99), done.
remote: Compressing objects: 100% (98/98), done.
remote: Total 105433 (delta 59), reused 5 (delta 1), pack-reused 105334
Receiving objects: 100% (105433/105433), 74.34 MiB | 40.86 MiB/s, done.
Resolving deltas: 100% (70684/70684), done.
```

You can also use private repos within go imports. (no GOPRIVATE configuration required.)  
`go.mod`
```
replace github.com/cosmos/cosmos-sdk => github.com/DefiantLabs/osmosis-cosmos-sdk v0.45.1-osmo-v12.0.0
```