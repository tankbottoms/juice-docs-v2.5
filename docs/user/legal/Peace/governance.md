# Governance

Peace DAO's purpose is to fund life-saving assistance and support for refugees of war and internally displaced people. The following is an initial framework for the governance of Peace DAO, the execution of funding initiatives, and the management of Peace DAO’s treasury.

## I. The Peace DAO Council 

The Peace DAO ("DAO") Council ("Council") exists to curate DAO governance proposals ("Proposals") and to operate the DAO's Gnosis Safe ("Multisig")[^1]. Council members ("Stewards") may be appointed or removed by Proposals, or by unanimous public consent of the Council. The initial Stewards are:

|Discord|Ethereum Address|ENS|
|-|-|-|
|@Fuego#4208|0x06bc1be1b5dd4d287a3be9b72dbe8eda8297c465|fuegomoves.eth|
|@tankbottoms(🎽,🍑)#2749|0x5d95baEBB8412AD827287240A5c281E3bB30d27E|tankbottoms.eth|
|@theryanking#1111|0x8C00f41676Ce4670ae9FcBBF297a24736dc23cc3|ryan-breslow.eth|
|@\_anna#5501|Unavailable|N/A|

Stewards must agree to act in accordance with the will of the DAO, as expressed through the DAO's Governance Framework. Stewards must also agree to the [Code of Conduct](../code-of-conduct). The Multisig must maintain a Safe threshold equal to or greater than 60 percent of the number of Stewards. All Multisig transactions and signatures must be in accordance with the DAO's governance process. Stewards in violation of these principles are to be removed from the Multisig, at the discretion of dao-lawfirm.eth.

## II. Proposal Process
> Before implementation, signatures and transactions from `peace.movedao.eth` and major updates to DAO documents, services, or processes must be submitted as Proposals and ratified by this process.

{{< alert icon="⚠️" context="info" text="Throughout the Proposal Process, the term \"name\" refers to an individual's Ethereum address, Ethereum Name Service name (\"ENS\"), Discord handle, Twitter handle, or another form of identification sufficient to identify that individual." />}}

### 1) Submission

Anyone holding a Peace DAO Movement NFT[^2] may submit a Proposal to the `#✍│proposals` channel in the [DAO's Discord](https://discord.gg/movexyz). **Peace Funding Initiatives** ("PFI"s) are proposals to fund relief efforts. All other Proposals are **Peace DAO Proposals** ("PDP"s).

Proposals must include:
- The name of the author(s).
- A Peace DAO Proposal (PDP-#) or Peace Funding Initiative (PFI-#) number.
- A specification containing the transactions to execute, including specific quantities of assets to be transferred and the recipients' Ethereum addresses if applicable.

### 2) Snapshot Voting

Stewards may endorse a Proposal by publicly stating their support and publishing the proposal to the [DAO's Snapshot Space](https://snapshot.org/#/peace.movedao.eth) for Basic voting with a 5 day Voting period. Proposals must be announced in the DAO's Discord before voting opens.

When publishing Proposals, Stewards must include:
- The name(s) of the Steward(s) endorsing it.
- A link documenting public Steward endorsement.
- The full proposal text, or a link to an immutable copy of the full proposal text.

The [DAO's Snapshot Space](https://snapshot.org/#/peace.movedao.eth) shall grant one vote per PEACE Token[^3] and use a Delegation strategy.[^4]

Proposals which receive affirmative votes amounting to at least 60% of total votes are queued for execution by the Council. "Abstain" votes are not included in this calculation.

### 3) Emergency Funding Initiatives

In an emergency scenario, the Council can take onchain actions if explicit public approval from 80 percent or more of Council members and explicit public approval from dao-lawfirm.eth is received.

[^1]: Peace DAO's Gnosis Multi-Signature Safe can be found on the Ethereum mainnet at [`0xD2427c0e44D28Ea74c0504E072c6073d135569B2`](https://etherscan.io/address/0xD2427c0e44D28Ea74c0504E072c6073d135569B2).
[^2]: Peace Movement DAO's Mainnet Ethereum NFT: [`0x1c43E7Fb2885d9FF4403521eAE41d7943F7f51Ee`](https://etherscan.io/address/0x1c43E7Fb2885d9FF4403521eAE41d7943F7f51Ee) [*OpenSea*](https://opensea.io/collection/peace-dao-distortion-v2).
[^3]: Peace Movement DAO's Mainnet Ethereum Token: [`0xdE43304bD02E5517a1B646179eb9612b5d58E6A1`](https://etherscan.io/token/0xdE43304bD02E5517a1B646179eb9612b5d58E6A1). To reduce gas fees, newly issued $PEACE tokens are stored in the Juicebox TicketBooth contract. The ERC-20 contract above reflects the total supply of claimed ERC-20 $PEACE tokens. To ascertain the total supply of claimed (ERC-20) and unclaimed $PEACE tokens, call the totalSupplyOf() function on the TicketBooth contract deployed to [`0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc`](https://etherscan.io/address/0xee2eBCcB7CDb34a8A822b589F9E8427C24351bfc), passing the desired Ethereum address and the project ID **528** (hex encoded as 210) as arguments.
[^4]: See the [Snapshot Docs](https://docs.snapshot.org/guides/delegation). Deployed on the Ethereum mainnet at [`0x469788fE6E9E9681C6ebF3bF78e7Fd26Fc015446`](https://etherscan.io/address/0x469788fE6E9E9681C6ebF3bF78e7Fd26Fc015446).
