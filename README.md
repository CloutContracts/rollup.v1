![CCSLOGO](https://raw.githubusercontent.com/CloutContracts/cloutcontracts.github.io/main/assets/images/c-128x128.png)
# Rollup v1.0
[CloutContracts](https://cloutcontracts.net) is a next gen blockchain development platform targeting creators and social influencers looking to quickly deploy their own network, or even professional blockchain architects. We are interplorabile and multichain compatible. Not only this, but we are the native token behind a high speed rollup layer.

###### Test Net: [0x5D0778eDE3867c69590FE611fCF8e233887CB655](https://ropsten.etherscan.io/address/0x5D0778eDE3867c69590FE611fCF8e233887CB655) | [0xFa32465ddFC3628F8723fe7941F035a494bfbFf2](https://ropsten.etherscan.io/address/0xfa32465ddfc3628f8723fe7941f035a494bfbff2)
###### Main Net: [0x1da4858ad385cc377165a298cc2ce3fce0c5fd31](https://etherscan.io/address/0x1da4858ad385cc377165a298cc2ce3fce0c5fd31) | [0x2C7716BDf98e181df4CF1b40aD7648A40EE813b9](https://etherscan.io/address/0x2c7716bdf98e181df4cf1b40ad7648a40ee813b9)
###### The ETC Peg: [0x9186ff77866DfD1007429F552e48C6d1A927297A](https://blockscout.com/etc/mainnet/address/0x9186ff77866DfD1007429F552e48C6d1A927297A) | [0x6f6ed4820E44128794D22eB0b8B5c035a8Eac4E6](https://blockscout.com/etc/mainnet/address/0x6f6ed4820E44128794D22eB0b8B5c035a8Eac4E6)
###### The BNB Peg: [0x3e3B357061103DC040759aC7DceEaba9901043aD](https://bscscan.com/address/0x3e3b357061103dc040759ac7dceeaba9901043ad) | [0xABa46894aCaB62A47Ff28c0a69e6333B80425dA5](https://bscscan.com/address/0xaba46894acab62a47ff28c0a69e6333b80425da5)

### Code:
```Solidity
pragma solidity ^0.5.15;
import { ParamManager } from "./libs/ParamManager.sol";
import { NameRegistry as Registry } from "./NameRegistry.sol";
import { IncrementalTree } from "./IncrementalTree.sol";
import { DepositManager } from "./DepositManager.sol";
import { Token } from "./Token.sol";
import { Rollup } from "./rollup.sol";
import { TokenRegistry } from "./TokenRegistry.sol";
import { Logger } from "./logger.sol";
import { MerkleTreeUtils as MTUtils } from "./MerkleTreeUtils.sol";
import { Governance } from "./Governance.sol";
...
```
## Instructions
*For running locally*

    git clone https://github.com/CloutContracts/node.git
    cd node
    
    make build
    docker run --name=mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=<your-password> -d mysql
    docker run --name myadmin -d --link mysql:db -p 8080:80 phpmyadmin/phpmyadmin

    make init
    
    Update the parameters in the config.toml file
    make migration-up
    make start
    
*Read the whitepaper [here](https://github.com/CloutContracts/whitepaper/tree/1.0)*
