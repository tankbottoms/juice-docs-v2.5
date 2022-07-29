---
title: Contract Addresses
sidebar_position: 8
---

### Gnosis Multi-Signature

#### Ethereum Mainnet

-   **Etherscan**: `https://etherscan.io/address/0xaf28bcb48c40dbc86f52d459a6562f658fc94b1e`
-   **Gnosis Safe**: `https://gnosis-safe.io/app/eth:0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e/balances`

#### Ethereum Rinkeby

-   **Etherscan**: `https://rinkeby.etherscan.io/address/0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e`
-   **Gnosis Safe**: `https://gnosis-safe.io/app/rin:0xAF28bcB48C40dBC86f52D459A6562F658fc94B1e/balances`

### Ethereum Mainnet

-   **JBChainlinkV3PriceFeed**: `0x729eE70bfdF65bEc7A530Fd49F644d07D0b2c087`
-   **JBController**: `0x4e3ef8AFCC2B52E4e704f4c8d9B7E7948F651351`
-   **JBCurrencies**: `0x7F6f2bb90256eAD1189a16A86efCdC0122141c01`
-   **JBDirectory**: `0xCc8f7a89d89c2AB3559f484E0C656423E979ac9C`
-   **JBETHERC20ProjectPayerDeployer**: `0x9E84bEcA3E4d3cfE5C3b5E1b534363E8D7468ABc`
-   **JBETHERC20SplitsPayerDeployer**: `0xf7A3D47be5AB412A469924B458113c769F675fcE`
-   **JBETHPaymentTerminal**: `0x7Ae63FBa045Fec7CaE1a75cF7Aa14183483b8397`
-   **JBFundingCycleStore**: `0x6B8e01DAA8A61b544F96d2738893E05D04BF1D12`
-   **JBOperatorStore**: `0x6F3C5afCa0c9eDf3926eF2dDF17c8ae6391afEfb`
-   **JBPrices**: `0xCDE93bdA2a706Fc652F7e75241bA949aCB9f4Fe5`
-   **JBProjects**: `0xD8B4359143eda5B2d763E127Ed27c77addBc47d3`
-   **JB3DayReconfigurationBufferBallot**: `0x4b9f876c7Fc5f6DEF8991fDe639b2C812a85Fb12``
-   **JB7DayReconfigurationBufferBallot**: `0x642EFF5259624FD09D021AB764a4b47d1DbD5770`
-   **JBSingleTokenPaymentTerminalStore**: `0x96a594ABE6B910E05E486b63B32fFe29DA5d33f7`
-   **JBSplitsStore**: `0xFBE1075826B7FFd898cf8D944885ba6a8D714A7F`
-   **JBTokenStore**: `0xCBB8e16d998161AdB20465830107ca298995f371`

### Juicebox DAO (JBX)

**Mainnet ERC-20 Token:** `0x3abf2a4f8452ccc2cf7b4c1e4663147600646f66`[^1]

[^1]: To reduce gas fees, newly issued $JBX tokens are stored in the Juicebox TicketBooth contract by default ("staked"). $JBX holders can call the unstake function on the TicketBooth contract to mint $JBX ERC-20 tokens to their wallets. In the frontend, this is called Claim and can be found under the Manage button. The above ERC-20 contract reflects the total supply of minted ERC-20 $JBX tokens. To ascertain the total supply of claimed (ERC-20) and unclaimed ("staked") $JBX tokens, call the totalSupplyOf() function on the TicketBooth contract above, passing project id 1 as the argument.
